import { useNavigate } from 'react-router-dom';
import { Plus, Users, UserCheck } from 'lucide-react';
import { AdminLayout } from '@/app/components/AdminLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const statistics = {
    students: 247,
    teachers: 18,
    experts: 3,
    parents: 412,
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-text-heading">Admin Dashboard</h1>
          <p className="text-sm md:text-base text-text-body">Lincoln Elementary School</p>
        </div>

        {/* User Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <Card className="p-6 border border-border-default bg-surface-card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-text-label">Students</p>
                <p className="text-3xl font-bold text-text-heading">
                  {statistics.students}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-surface-page flex items-center justify-center">
                <Users className="w-6 h-6 text-text-label" />
              </div>
            </div>
            <Button
              onClick={() => navigate('/admin/students/new')}
              className="w-full bg-brand hover:bg-brand-dark text-white shadow-sm"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Student
            </Button>
          </Card>

          <Card className="p-6 border border-border-default bg-surface-card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-text-label">Teachers</p>
                <p className="text-3xl font-bold text-text-heading">
                  {statistics.teachers}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-surface-page flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-text-label" />
              </div>
            </div>
            <Button
              onClick={() => navigate('/admin/teachers/new')}
              className="w-full bg-brand hover:bg-brand-dark text-white shadow-sm"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Teacher
            </Button>
          </Card>

          <Card className="p-6 border border-border-default bg-surface-card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-text-label">Behavioral Experts</p>
                <p className="text-3xl font-bold text-text-heading">
                  {statistics.experts}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-surface-page flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-text-label" />
              </div>
            </div>
            <Button
              onClick={() => navigate('/admin/experts/new')}
              className="w-full bg-brand hover:bg-brand-dark text-white shadow-sm"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Expert
            </Button>
          </Card>

          <Card className="p-6 border border-border-default bg-surface-card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-text-label">Parents</p>
                <p className="text-3xl font-bold text-text-heading">
                  {statistics.parents}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-surface-page flex items-center justify-center">
                <Users className="w-6 h-6 text-text-label" />
              </div>
            </div>
            <Button
              onClick={() => navigate('/admin/parents/new')}
              className="w-full bg-brand hover:bg-brand-dark text-white shadow-sm"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Parent
            </Button>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}