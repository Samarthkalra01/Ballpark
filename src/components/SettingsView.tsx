import React from 'react';
import { User, Building2, GraduationCap, Calendar, Save, Check } from 'lucide-react';
import { StudentProfile, TargetFirm } from '../types';

interface SettingsViewProps {
  profile: StudentProfile;
  setProfile: React.Dispatch<React.SetStateAction<StudentProfile>>;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  profile,
  setProfile,
}) => {
  const [saved, setSaved] = React.useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const firms: TargetFirm[] = [
    'McKinsey & Company',
    'Boston Consulting Group',
    'Bain & Company',
    'Strategy&',
    'Oliver Wyman',
    'Roland Berger',
    'Big 4 Consulting',
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-16">
      <div className="border-b border-slate-200 pb-6">
        <h2 className="text-2xl font-bold text-slate-800">Student Profile & Target Settings</h2>
        <p className="text-xs text-slate-500 mt-1">
          Customize your target firm, recruitment intake timeline, and personal candidate profile.
        </p>
      </div>

      <form onSubmit={handleSave} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
        {/* Profile Details */}
        <div className="space-y-4">
          <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800 flex items-center gap-2">
            <User className="w-4 h-4 text-indigo-600" />
            <span>Candidate Information</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Candidate Name
              </label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile((p) => ({ ...p, name: e.target.value }))}
                className="w-full px-3.5 py-2.5 text-xs font-medium text-slate-800 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                University / Institution
              </label>
              <input
                type="text"
                value={profile.university}
                onChange={(e) => setProfile((p) => ({ ...p, university: e.target.value }))}
                className="w-full px-3.5 py-2.5 text-xs font-medium text-slate-800 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
          </div>
        </div>

        <hr className="border-slate-100" />

        {/* Recruitment Target Details */}
        <div className="space-y-4">
          <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-indigo-600" />
            <span>Recruitment Targets</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Primary Target Firm
              </label>
              <select
                value={profile.targetFirm}
                onChange={(e) => setProfile((p) => ({ ...p, targetFirm: e.target.value as TargetFirm }))}
                className="w-full px-3.5 py-2.5 text-xs font-medium text-slate-800 border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20"
              >
                {firms.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Target Role
              </label>
              <input
                type="text"
                value={profile.targetRole}
                onChange={(e) => setProfile((p) => ({ ...p, targetRole: e.target.value }))}
                className="w-full px-3.5 py-2.5 text-xs font-medium text-slate-800 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Target Intake Year
              </label>
              <input
                type="text"
                value={profile.targetYear}
                onChange={(e) => setProfile((p) => ({ ...p, targetYear: e.target.value }))}
                className="w-full px-3.5 py-2.5 text-xs font-medium text-slate-800 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
          {saved ? (
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
              <Check className="w-4 h-4" />
              <span>Settings saved successfully!</span>
            </span>
          ) : (
            <span className="text-xs text-slate-500">Changes are applied instantly to case evaluation context</span>
          )}

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
          >
            <Save className="w-4 h-4" />
            <span>Save Settings</span>
          </button>
        </div>
      </form>
    </div>
  );
};
