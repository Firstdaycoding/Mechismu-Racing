import { useState, useEffect, useMemo, useCallback } from 'react';

const SECTION_CONFIG = [
  { key: 'leadership', label: 'Leadership', file: 'leadership' },
  { key: 'vd', label: 'Vehicle Dynamics', file: 'vd' },
  { key: 'hv', label: 'High Voltage', file: 'hv' },
  { key: 'lv', label: 'Low Voltage', file: 'lv' },
  { key: 'ops', label: 'Operations', file: 'ops' },
  { key: 'structures', label: 'Structures', file: 'structures' },
];

/**
 * Team JSON Data Structure Expected
 * name: string
 * role: string
 * socials: obj
 */
const loadYearData = async (year) => {
  const results = {};
  for (const section of SECTION_CONFIG) {
    try {
      const module = await import(`../data/${year}/${section.file}.json`);
      results[section.key] = module.default || module;
    } catch (e) {
      results[section.key] = [];
    }
  }
  return results;
};

export const useTeamFilter = (initialYear = 2025) => {
  const [activeYear, setActiveYear] = useState(initialYear);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [teamData, setTeamData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);

    loadYearData(activeYear).then((data) => {
      if (!cancelled) {
        setTeamData(data);
        setIsLoading(false);
      }
    });

    return () => { cancelled = true; };
  }, [activeYear]);

  const filteredSections = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return SECTION_CONFIG.map((section) => {
      if (activeFilter !== 'all' && activeFilter !== section.key) {
        return { ...section, members: [] };
      }

      let members = teamData[section.key] || [];

      if (query) {
        members = members.filter(
          (m) =>
            m.name.toLowerCase().includes(query) ||
            m.role.toLowerCase().includes(query)
        );
      }

      return { ...section, members };
    }).filter((s) => s.members.length > 0);
  }, [teamData, activeFilter, searchQuery]);

  const totalMembers = useMemo(() => {
    return Object.values(teamData).reduce((sum, arr) => sum + (arr?.length || 0), 0);
  }, [teamData]);

  const changeYear = useCallback((year) => {
    if (year === activeYear) return false; // indicates no change
    setIsTransitioning(true);
    return true; // indicates transition start
  }, [activeYear]);

  const completeYearChange = useCallback((year) => {
    setActiveYear(year);
    setIsTransitioning(false);
  }, []);

  return {
    activeYear,
    activeFilter,
    setActiveFilter,
    searchQuery,
    setSearchQuery,
    isLoading,
    isTransitioning,
    filteredSections,
    totalMembers,
    changeYear,
    completeYearChange
  };
};
