import React, { useEffect, useState } from 'react';
import { getAllUsers, Logout } from '../../services/ApiService';
import { toast } from 'react-toastify';
import { Users, Edit3, Trash2, Eye, UserCheck, UserX, Activity, Calendar, Mail, Phone, Hash, Search, Filter, RefreshCw, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FaGenderless, FaMars, FaVenus } from 'react-icons/fa';
import { RemoveUser } from '../../services/ApiService';
import { Button } from 'react-bootstrap';

function AdminDashboard() {
    const Navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(6);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const res = await getAllUsers();
                if (!res || res.length === 0) {
                    toast.info("No users found");
                    setUsers([]);
                } else {
                    setUsers(res.users || []);
                }
            } catch (error) {
                if (error) {
                    if (error.response && error.response.status === 401) {
                        localStorage.removeItem("token");
                        toast.error("Authorization token missing or invalid. Please log in again.");
                        Navigate("/");
                        return;
                    } else if (error.response && error.response.status === 403) {
                        localStorage.removeItem("token");
                        toast.error("Access forbidden. Please log in again.");
                        Navigate("/");
                        return;
                    }
                }
                toast.error("Failed to load users");
                setUsers([]);
                Logout();
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);


    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, filterStatus]);

    const handleRefresh = () => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const res = await getAllUsers();
                if (!res || res.length === 0) {
                    toast.info("No users found");
                    setUsers([]);
                } else {
                    setUsers(res.users || []);
                }
            } catch (error) {
                console.error("Error fetching users:", error);
                toast.error("Failed to refresh users");
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
        setCurrentPage(1);
    };

    const handleEdit = (userId) => {
        if (!userId) {
            toast.error("Error Fetching User ID, Please wait...");
            return;
        }
        window.location.href = `/admin/updateuser/${userId}`;
    };

    const handleDelete = async (userId) => {
        try {
            const res = await RemoveUser(userId);
            console.log(res);
            if (res.status === 200) {
                handleRefresh();
                toast.success("User deleted successfully");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const handleView = (userId) => {
        if (!userId) {
            toast.error("Error Fetching User ID, Please wait...");
            return;
        }
        window.location.href = `/admin/viewuser/${userId}`;
    };

    const toggleUserStatus = (userId, currentStatus) => {
        const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
        toast.info(`${newStatus === 'active' ? 'Activate' : 'Deactivate'} user ${userId} - Feature coming soon!`);
    };

    const getInitials = (name) => {
        return name ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 'U';
    };

    const getAvatarColor = (index) => {
        const colors = ['--pastel-1', '--pastel-2', '--pastel-3', '--pastel-4', '--pastel-5'];
        return `var(${colors[index % colors.length]})`;
    };

    // Filter users based on search and status
    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterStatus === 'all' || user.status === filterStatus;
        return matchesSearch && matchesFilter;
    });

    // Pagination calculations
    const totalUsers = filteredUsers.length;
    const totalPages = Math.ceil(totalUsers / usersPerPage);
    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const currentUsers = filteredUsers.slice(startIndex, endIndex);

    // Pagination handlers
    const goToFirstPage = () => setCurrentPage(1);
    const goToLastPage = () => setCurrentPage(totalPages);
    const goToPreviousPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
    const goToNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
    const goToPage = (page) => setCurrentPage(page);

    // Generate page numbers for pagination
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            const halfVisible = Math.floor(maxVisiblePages / 2);
            let startPage = Math.max(currentPage - halfVisible, 1);
            let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

            if (endPage - startPage + 1 < maxVisiblePages) {
                startPage = Math.max(endPage - maxVisiblePages + 1, 1);
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }
        }

        return pageNumbers;
    };

    return (
        <div className="admin-dashboard">
            {/* Header Section */}
            <div className="admin-header">
                <div className="admin-title-section">
                    <div className="admin-icon">
                        <Users size={32} />
                    </div>
                    <div>
                        <h1 className="admin-title">Admin Dashboard</h1>
                        <p className="admin-subtitle">Manage users and monitor fitness activities</p>
                    </div>
                </div>

                <div className="admin-stats">
                    <div className="admin-stat-card">
                        <Activity className="admin-stat-icon" size={24} />
                        <div>
                            <div className="admin-stat-number">{users.length}</div>
                            <div className="admin-stat-label">Total Users</div>
                        </div>
                    </div>

                    <div className="admin-stat-card">
                        <UserCheck className="admin-stat-icon" size={24} />
                        <div>
                            <div className="admin-stat-number">
                                {users.filter(u => u.status === 'active').length}
                            </div>
                            <div className="admin-stat-label">Active Users</div>
                        </div>
                    </div>

                    <div className="admin-stat-card">
                        <Calendar className="admin-stat-icon" size={24} />
                        <div>
                            <div className="admin-stat-number">
                                {users.filter(u => u.lastWorkout &&
                                    new Date(u.lastWorkout) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                                ).length}
                            </div>
                            <div className="admin-stat-label">Active This Week</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Controls Section */}
            <div className="admin-controls">
                <div className="admin-search-section">
                    <div className="admin-search-input">
                        <Search size={20} />
                        <input type="text" placeholder="Search users by name or email..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>

                    <div className="admin-filter-select">
                        <Filter size={20} />
                        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                            <option value="all">All Users</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                </div>

                <button className="admin-refresh-btn" onClick={handleRefresh} disabled={loading}>
                    <RefreshCw size={20} className={loading ? 'spinning' : ''} />
                    Refresh
                </button>
            </div>

            {/* Results Info */}
            {!loading && totalUsers > 0 && (
                <div className="admin-results-info">
                    <p>
                        Showing {startIndex + 1}-{Math.min(endIndex, totalUsers)} of {totalUsers} users
                        {(searchTerm || filterStatus !== 'all') && ` (filtered from ${users.length} total)`}
                    </p>
                </div>
            )}

            {/* Users Grid */}
            <div className="admin-users-section">
                {loading ? (
                    <div className="admin-loading">
                        <div className="admin-loading-spinner"></div>
                        <p>Loading users...</p>
                    </div>
                ) : currentUsers.length > 0 ? (
                    <>
                        <div className="admin-users-grid">
                            {currentUsers.map((user, index) => (
                                <div key={user.id || index} className="admin-user-card">
                                    <div className="admin-user-header">
                                        <div className="admin-user-avatar" style={{ backgroundColor: getAvatarColor(startIndex + index) }}>
                                            {getInitials(user.name)}
                                        </div>
                                        <div className="admin-user-info">
                                            <h3 className="admin-user-name">{user.name}</h3>
                                            <div className={`admin-user-status ${user.status || 'active'}`}>
                                                {user.status === 'inactive' ? <UserX size={14} /> : <UserCheck size={14} />}
                                                {user.status || 'Active'}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="admin-user-details">
                                        <div className="admin-user-detail">
                                            <Mail size={16} />
                                            <span>{user.email}</span>
                                        </div>

                                        {user.contact && (
                                            <div className="admin-user-detail">
                                                <Phone size={16} />
                                                <span>{user.contact}</span>
                                            </div>
                                        )}

                                        {user.age && (
                                            <div className="admin-user-detail">
                                                <Hash size={16} />
                                                <span>Age: {user.age}</span>
                                            </div>
                                        )}

                                        {user.lastWorkout && (
                                            <div className="admin-user-detail">
                                                <Activity size={16} />
                                                <span>Last workout: {new Date(user.lastWorkout).toLocaleDateString()}</span>
                                            </div>
                                        )}
                                        {user.gender && (
                                            <div className="admin-user-detail">
                                                {user.gender.toLowerCase() === "male" && <FaMars size={16} color="#007BFF" />}
                                                {user.gender.toLowerCase() === "female" && <FaVenus size={16} color="#E75480" />}
                                                {user.gender.toLowerCase() !== "male" && user.gender.toLowerCase() !== "female" && (
                                                    <FaGenderless size={16} color="#888" />
                                                )}
                                                <span>{user.gender}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="admin-user-actions">
                                        <Button className="admin-action-btn view" onClick={() => handleView(user._id)} title="View Details">
                                            <Eye size={16} />
                                        </Button>

                                        <Button className="admin-action-btn edit" onClick={() => handleEdit(user._id)} title="Edit User">
                                            <Edit3 size={16} />
                                        </Button>

                                        <Button className="admin-action-btn toggle" onClick={() => toggleUserStatus(user._id, user.status)} title={user.status === 'active' ? 'Deactivate User' : 'Activate User'}>
                                            {user.status === 'inactive' ? <UserCheck size={16} /> : <UserX size={16} />}
                                        </Button>

                                        <Button className="admin-action-btn delete" onClick={() => handleDelete(user._id)} title="Delete User">
                                            <Trash2 size={16} />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                            <div className="admin-pagination">
                                <div className="admin-pagination-controls">
                                    <button className="admin-pagination-btn" onClick={goToFirstPage} disabled={currentPage === 1} title="First Page">
                                        <ChevronsLeft size={16} />
                                    </button>

                                    <button className="admin-pagination-btn" onClick={goToPreviousPage} disabled={currentPage === 1} title="Previous Page">
                                        <ChevronLeft size={16} />
                                    </button>

                                    <div className="admin-pagination-numbers">
                                        {getPageNumbers().map(pageNum => (
                                            <button key={pageNum} className={`admin-pagination-number ${currentPage === pageNum ? 'active' : ''}`} onClick={() => goToPage(pageNum)}>
                                                {pageNum}
                                            </button>
                                        ))}
                                    </div>

                                    <button className="admin-pagination-btn" onClick={goToNextPage} disabled={currentPage === totalPages} title="Next Page">
                                        <ChevronRight size={16} />
                                    </button>

                                    <button className="admin-pagination-btn" onClick={goToLastPage} disabled={currentPage === totalPages} title="Last Page">
                                        <ChevronsRight size={16} />
                                    </button>
                                </div>

                                <div className="admin-pagination-info">
                                    <span>Page {currentPage} of {totalPages}</span>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="admin-empty-state">
                        <Users size={64} />
                        <h3>No users found</h3>
                        <p>
                            {searchTerm || filterStatus !== 'all'
                                ? 'Try adjusting your search or filter criteria'
                                : 'There are no users in the system yet'
                            }
                        </p>
                    </div>
                )}
            </div>
        </div >
    );
}

export default AdminDashboard;