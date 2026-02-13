'use client';

import { useState, useCallback } from 'react';
import { DemoLayout } from '../ui/DemoLayout';
import { DashboardWidget } from './DashboardWidget';
import { KPICard } from './KPICard';
import styles from './BIDashboardDemo.module.scss';
import { motion, Reorder } from 'framer-motion';
import {
  DollarSign,
  TrendingUp,
  Users,
  ClipboardList,
  Download,
  RefreshCw,
  Plus,
  Layout,
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';

// Sample data for charts
const revenueData = [
  { month: 'Jan', revenue: 45000, target: 40000 },
  { month: 'Feb', revenue: 52000, target: 45000 },
  { month: 'Mar', revenue: 48000, target: 50000 },
  { month: 'Apr', revenue: 61000, target: 55000 },
  { month: 'May', revenue: 55000, target: 58000 },
  { month: 'Jun', revenue: 67000, target: 60000 },
  { month: 'Jul', revenue: 72000, target: 65000 },
  { month: 'Aug', revenue: 78000, target: 70000 },
];

const projectStatusData = [
  { name: 'Completed', value: 35, color: '#22c55e' },
  { name: 'In Progress', value: 28, color: '#6366f1' },
  { name: 'Planning', value: 15, color: '#f59e0b' },
  { name: 'On Hold', value: 8, color: '#ef4444' },
];

const departmentData = [
  { department: 'Sales', performance: 92 },
  { department: 'Operations', performance: 85 },
  { department: 'Finance', performance: 78 },
  { department: 'HR', performance: 88 },
  { department: 'IT', performance: 95 },
];

const vendorCostData = [
  { month: 'Jan', estimated: 32000, actual: 28500 },
  { month: 'Feb', estimated: 35000, actual: 36200 },
  { month: 'Mar', estimated: 38000, actual: 37800 },
  { month: 'Apr', estimated: 42000, actual: 39500 },
  { month: 'May', estimated: 45000, actual: 44100 },
  { month: 'Jun', estimated: 48000, actual: 46800 },
];

const radarData = [
  { metric: 'Sales', value: 85 },
  { metric: 'Marketing', value: 72 },
  { metric: 'Support', value: 90 },
  { metric: 'Development', value: 88 },
  { metric: 'Finance', value: 76 },
  { metric: 'HR', value: 82 },
];

interface WidgetConfig {
  id: string;
  title: string;
  type: 'line' | 'bar' | 'pie' | 'area' | 'radar' | 'kpi-grid';
  size: 'small' | 'medium' | 'large';
}

const initialWidgets: WidgetConfig[] = [
  { id: 'w1', title: 'Revenue vs Target', type: 'area', size: 'large' },
  { id: 'w2', title: 'Project Status', type: 'pie', size: 'medium' },
  { id: 'w3', title: 'Department Performance', type: 'bar', size: 'medium' },
  { id: 'w4', title: 'Vendor Cost Variance', type: 'line', size: 'large' },
  { id: 'w5', title: 'Performance Radar', type: 'radar', size: 'medium' },
];

const CHART_COLORS = ['#6366f1', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

export function BIDashboardDemo() {
  const [widgets, setWidgets] = useState<WidgetConfig[]>(initialWidgets);
  const [selectedRecord, setSelectedRecord] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1500);
  };

  const handleDrillDown = (dataPoint: string) => {
    setSelectedRecord(dataPoint);
    setTimeout(() => setSelectedRecord(null), 3000);
  };

  const renderChart = (widget: WidgetConfig) => {
    switch (widget.type) {
      case 'area':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--neutral-alpha-weak)" />
              <XAxis dataKey="month" stroke="var(--neutral-on-background-weak)" fontSize={11} />
              <YAxis stroke="var(--neutral-on-background-weak)" fontSize={11} />
              <Tooltip
                contentStyle={{
                  background: 'var(--surface-background)',
                  border: '1px solid var(--neutral-alpha-weak)',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#6366f1"
                fill="url(#colorRevenue)"
                strokeWidth={2}
                onClick={(data) => handleDrillDown(`Revenue: ${data?.month}`)}
                style={{ cursor: 'pointer' }}
              />
              <Line type="monotone" dataKey="target" stroke="#22c55e" strokeDasharray="5 5" />
            </AreaChart>
          </ResponsiveContainer>
        );

      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={projectStatusData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                onClick={(data) => handleDrillDown(`Project: ${data?.name}`)}
                style={{ cursor: 'pointer' }}
              >
                {projectStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: 'var(--surface-background)',
                  border: '1px solid var(--neutral-alpha-weak)',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        );

      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={departmentData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="var(--neutral-alpha-weak)" />
              <XAxis type="number" stroke="var(--neutral-on-background-weak)" fontSize={11} />
              <YAxis dataKey="department" type="category" stroke="var(--neutral-on-background-weak)" fontSize={11} width={80} />
              <Tooltip
                contentStyle={{
                  background: 'var(--surface-background)',
                  border: '1px solid var(--neutral-alpha-weak)',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
              <Bar
                dataKey="performance"
                fill="#6366f1"
                radius={[0, 4, 4, 0]}
                onClick={(data) => handleDrillDown(`Department: ${data?.department}`)}
                style={{ cursor: 'pointer' }}
              />
            </BarChart>
          </ResponsiveContainer>
        );

      case 'line':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={vendorCostData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--neutral-alpha-weak)" />
              <XAxis dataKey="month" stroke="var(--neutral-on-background-weak)" fontSize={11} />
              <YAxis stroke="var(--neutral-on-background-weak)" fontSize={11} />
              <Tooltip
                contentStyle={{
                  background: 'var(--surface-background)',
                  border: '1px solid var(--neutral-alpha-weak)',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
              <Line
                type="monotone"
                dataKey="estimated"
                stroke="#f59e0b"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#22c55e"
                strokeWidth={2}
                dot={{ r: 4 }}
                onClick={(data) => handleDrillDown(`Vendor Cost: ${data?.month}`)}
                style={{ cursor: 'pointer' }}
              />
            </LineChart>
          </ResponsiveContainer>
        );

      case 'radar':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="var(--neutral-alpha-weak)" />
              <PolarAngleAxis dataKey="metric" stroke="var(--neutral-on-background-weak)" fontSize={11} />
              <PolarRadiusAxis stroke="var(--neutral-alpha-weak)" fontSize={10} />
              <Radar
                name="Performance"
                dataKey="value"
                stroke="#8b5cf6"
                fill="#8b5cf6"
                fillOpacity={0.3}
              />
              <Tooltip
                contentStyle={{
                  background: 'var(--surface-background)',
                  border: '1px solid var(--neutral-alpha-weak)',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        );

      default:
        return null;
    }
  };

  return (
    <DemoLayout
      title="Executive BI Dashboard"
      subtitle="Drag-and-drop widgets with real-time drill-down"
    >
      {/* KPI Cards */}
      <div className={styles.kpiRow}>
        <KPICard
          title="Total Revenue"
          value="$478,500"
          change={12.5}
          icon={DollarSign}
          onClick={() => handleDrillDown('Revenue Records')}
        />
        <KPICard
          title="Active Projects"
          value="86"
          change={8}
          icon={ClipboardList}
          onClick={() => handleDrillDown('Project List')}
        />
        <KPICard
          title="Conversion Rate"
          value="34.2%"
          change={-2.1}
          icon={TrendingUp}
          onClick={() => handleDrillDown('Sales Funnel')}
        />
        <KPICard
          title="Active Vendors"
          value="42"
          change={5}
          icon={Users}
          onClick={() => handleDrillDown('Vendor Directory')}
        />
      </div>

      {/* Actions Bar */}
      <div className={styles.actionsBar}>
        <div className={styles.actionsLeft}>
          <button className={styles.actionButton} onClick={handleRefresh}>
            <RefreshCw className={`${styles.actionIcon} ${isRefreshing ? styles.spinning : ''}`} />
            <span>Refresh</span>
          </button>
          <button className={styles.actionButton}>
            <Plus className={styles.actionIcon} />
            <span>Add Widget</span>
          </button>
          <button className={styles.actionButton}>
            <Layout className={styles.actionIcon} />
            <span>Reset Layout</span>
          </button>
        </div>
        <div className={styles.actionsRight}>
          <button className={styles.exportButton}>
            <Download className={styles.actionIcon} />
            <span>Export PDF</span>
          </button>
          <button className={styles.exportButton}>
            <Download className={styles.actionIcon} />
            <span>Export Excel</span>
          </button>
        </div>
      </div>

      {/* Drill-down Notification */}
      {selectedRecord && (
        <motion.div
          className={styles.drilldownNotice}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          🔍 Drilling down to: <strong>{selectedRecord}</strong> — Opening live business records...
        </motion.div>
      )}

      {/* Dashboard Grid */}
      <Reorder.Group
        axis="y"
        values={widgets}
        onReorder={setWidgets}
        className={styles.dashboardGrid}
      >
        {widgets.map((widget) => (
          <Reorder.Item key={widget.id} value={widget} className={styles.widgetWrapper}>
            <DashboardWidget
              title={widget.title}
              size={widget.size}
              onDrillDown={() => handleDrillDown(widget.title)}
            >
              {renderChart(widget)}
            </DashboardWidget>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      {/* Footer Note */}
      <div className={styles.footerNote}>
        <span className={styles.techBadge}>GridStack.js</span>
        <span className={styles.techBadge}>AmCharts 5</span>
        <span className={styles.techBadge}>4,600+ lines</span>
        <span className={styles.noteText}>
          Click any chart element to drill down to live business records
        </span>
      </div>
    </DemoLayout>
  );
}
