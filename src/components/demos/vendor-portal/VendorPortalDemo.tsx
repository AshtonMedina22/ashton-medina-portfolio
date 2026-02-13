'use client';

import { useState } from 'react';
import { DemoLayout } from '../ui/DemoLayout';
import { WorkOrderCard, WorkOrder } from './WorkOrderCard';
import { RFQPanel } from './RFQPanel';
import styles from './VendorPortalDemo.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Clock,
  CheckCircle2,
  XCircle,
  Play,
  FileCheck,
  AlertTriangle,
  Key,
  Users,
  FileText,
  Bell,
} from 'lucide-react';

type WorkOrderStatus = 'pending' | 'sent' | 'confirmed' | 'declined' | 'in_progress' | 'completed';

const initialWorkOrders: WorkOrder[] = [
  {
    id: 'wo-001',
    client: 'TechCorp Annual Gala',
    service: 'Catering Services',
    category: 'Food & Beverage',
    date: 'Dec 10, 2024',
    status: 'pending',
    value: 15000,
    dueIn: '24 hours',
  },
  {
    id: 'wo-002',
    client: 'Morrison Wedding Reception',
    service: 'AV Equipment Setup',
    category: 'Technical',
    date: 'Oct 12, 2024',
    status: 'sent',
    value: 4500,
    dueIn: '48 hours',
  },
  {
    id: 'wo-003',
    client: 'Global Health Summit',
    service: 'Stage Construction',
    category: 'Setup & Decor',
    date: 'Nov 05, 2024',
    status: 'confirmed',
    value: 12000,
  },
  {
    id: 'wo-004',
    client: 'Startup Launch Party',
    service: 'Photography & Video',
    category: 'Media',
    date: 'Nov 12, 2024',
    status: 'in_progress',
    value: 3500,
  },
  {
    id: 'wo-005',
    client: 'Winter Wonderland Ball',
    service: 'Floral Arrangements',
    category: 'Decor',
    date: 'Dec 22, 2024',
    status: 'completed',
    value: 8000,
  },
];

const statusConfig: Record<WorkOrderStatus, { label: string; color: string; icon: React.ElementType }> = {
  pending: { label: 'Pending', color: '#f59e0b', icon: Clock },
  sent: { label: 'Sent', color: '#6366f1', icon: FileText },
  confirmed: { label: 'Confirmed', color: '#22c55e', icon: CheckCircle2 },
  declined: { label: 'Declined', color: '#ef4444', icon: XCircle },
  in_progress: { label: 'In Progress', color: '#8b5cf6', icon: Play },
  completed: { label: 'Completed', color: '#10b981', icon: FileCheck },
};

export function VendorPortalDemo() {
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>(initialWorkOrders);
  const [showTokenModal, setShowTokenModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<WorkOrder | null>(null);
  const [showRFQ, setShowRFQ] = useState(false);
  const [notifications, setNotifications] = useState<string[]>([]);

  const addNotification = (message: string) => {
    setNotifications((prev) => [message, ...prev].slice(0, 5));
    setTimeout(() => {
      setNotifications((prev) => prev.slice(0, -1));
    }, 4000);
  };

  const handleStatusChange = (id: string, newStatus: WorkOrderStatus) => {
    setWorkOrders((orders) =>
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
    
    const order = workOrders.find((o) => o.id === id);
    if (order) {
      addNotification(`${order.service} → ${statusConfig[newStatus].label}`);
    }
  };

  const handleTokenAccess = (order: WorkOrder) => {
    setSelectedOrder(order);
    setShowTokenModal(true);
    addNotification(`Tokenized link generated (48hr expiry)`);
  };

  // Stats
  const stats = {
    pending: workOrders.filter((o) => o.status === 'pending').length,
    active: workOrders.filter((o) => ['sent', 'confirmed', 'in_progress'].includes(o.status)).length,
    completed: workOrders.filter((o) => o.status === 'completed').length,
    totalValue: workOrders.reduce((sum, o) => sum + o.value, 0),
  };

  return (
    <DemoLayout
      title="Vendor Portal"
      subtitle="Tokenized access with 6-state work order lifecycle"
    >
      {/* Portal Security Banner */}
      <div className={styles.securityBanner}>
        <Shield className={styles.securityIcon} />
        <div className={styles.securityText}>
          <strong>Record-Level Isolation Active</strong>
          <span>You only see your assigned work orders. No customer pricing, no other vendors, no margin data.</span>
        </div>
        <div className={styles.tokenInfo}>
          <Key size={14} />
          <span>Token expires in 47:32:14</span>
        </div>
      </div>

      {/* Stats Row */}
      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <Clock className={styles.statIcon} style={{ color: '#f59e0b' }} />
          <div>
            <span className={styles.statValue}>{stats.pending}</span>
            <span className={styles.statLabel}>Pending</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <Play className={styles.statIcon} style={{ color: '#6366f1' }} />
          <div>
            <span className={styles.statValue}>{stats.active}</span>
            <span className={styles.statLabel}>Active</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <CheckCircle2 className={styles.statIcon} style={{ color: '#22c55e' }} />
          <div>
            <span className={styles.statValue}>{stats.completed}</span>
            <span className={styles.statLabel}>Completed</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <FileText className={styles.statIcon} style={{ color: '#8b5cf6' }} />
          <div>
            <span className={styles.statValue}>${(stats.totalValue / 1000).toFixed(0)}K</span>
            <span className={styles.statLabel}>Total Value</span>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className={styles.notificationsContainer}>
        <AnimatePresence>
          {notifications.map((notif, i) => (
            <motion.div
              key={`${notif}-${i}`}
              className={styles.notification}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
            >
              <Bell size={14} />
              {notif}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Work Orders List */}
        <div className={styles.workOrdersSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Work Orders</h2>
            <button className={styles.rfqButton} onClick={() => setShowRFQ(true)}>
              <Users size={14} />
              View RFQ Workflow
            </button>
          </div>

          {/* Status Flow */}
          <div className={styles.statusFlow}>
            {Object.entries(statusConfig).map(([key, config], index) => (
              <div key={key} className={styles.statusStep}>
                <div 
                  className={styles.statusDot} 
                  style={{ backgroundColor: config.color }}
                >
                  <config.icon size={12} />
                </div>
                <span className={styles.statusLabel}>{config.label}</span>
                {index < 5 && <div className={styles.statusConnector} />}
              </div>
            ))}
          </div>

          {/* Work Order Cards */}
          <div className={styles.workOrdersList}>
            {workOrders.map((order) => (
              <WorkOrderCard
                key={order.id}
                order={order}
                onStatusChange={handleStatusChange}
                onTokenAccess={handleTokenAccess}
              />
            ))}
          </div>
        </div>

        {/* Compliance Sidebar */}
        <div className={styles.complianceSidebar}>
          <div className={styles.complianceHeader}>
            <AlertTriangle className={styles.complianceIcon} />
            <span>Compliance Status</span>
          </div>
          <div className={styles.complianceList}>
            <div className={styles.complianceItem}>
              <CheckCircle2 className={styles.compliantIcon} />
              <div>
                <span className={styles.complianceTitle}>Insurance Certificate</span>
                <span className={styles.complianceExpiry}>Expires: Mar 2025</span>
              </div>
            </div>
            <div className={styles.complianceItem}>
              <CheckCircle2 className={styles.compliantIcon} />
              <div>
                <span className={styles.complianceTitle}>Business License</span>
                <span className={styles.complianceExpiry}>Expires: Dec 2025</span>
              </div>
            </div>
            <div className={`${styles.complianceItem} ${styles.expiring}`}>
              <AlertTriangle className={styles.expiringIcon} />
              <div>
                <span className={styles.complianceTitle}>Health Certification</span>
                <span className={styles.complianceExpiry}>Expires in 15 days</span>
              </div>
            </div>
            <div className={styles.complianceItem}>
              <CheckCircle2 className={styles.compliantIcon} />
              <div>
                <span className={styles.complianceTitle}>W-9 Form</span>
                <span className={styles.complianceExpiry}>On file</span>
              </div>
            </div>
          </div>
          <div className={styles.complianceFooter}>
            <span>15+ service categories tracked</span>
          </div>
        </div>
      </div>

      {/* Token Modal */}
      <AnimatePresence>
        {showTokenModal && selectedOrder && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowTokenModal(false)}
          >
            <motion.div
              className={styles.tokenModal}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.tokenHeader}>
                <Key className={styles.tokenIcon} />
                <span>Secure Access Link</span>
              </div>
              <div className={styles.tokenContent}>
                <p>Tokenized link generated for external vendor access:</p>
                <code className={styles.tokenUrl}>
                  https://portal.domain.com/v/{selectedOrder.id}?token=xK9m2...
                </code>
                <ul className={styles.tokenFeatures}>
                  <li>✓ 48-hour expiry</li>
                  <li>✓ No login credentials required</li>
                  <li>✓ Record-level isolation enforced</li>
                  <li>✓ E-signature accept/decline available</li>
                </ul>
              </div>
              <button 
                className={styles.closeButton}
                onClick={() => setShowTokenModal(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RFQ Panel */}
      <AnimatePresence>
        {showRFQ && <RFQPanel onClose={() => setShowRFQ(false)} />}
      </AnimatePresence>

      {/* Footer */}
      <div className={styles.footerNote}>
        <span className={styles.techBadge}>15 Secure Routes</span>
        <span className={styles.techBadge}>Token Auth</span>
        <span className={styles.techBadge}>1,460+ lines</span>
        <span className={styles.noteText}>
          E-signature accept/decline with reason capture
        </span>
      </div>
    </DemoLayout>
  );
}
