'use client';

import { useSearchPanel } from '@/app/_components/layout/header-layout/_hooks/useSearchPanel';
import { Header } from '@/app/_components/header';
import { SearchPanel } from '@/app/_components/search-panel';
import { useSelectedLayoutSegment } from 'next/navigation';
import { EXCLUDED_SEGMENTS } from '@/app/_components/layout/header-layout/constants/excludedSegments';

const excludedSegments = new Set(EXCLUDED_SEGMENTS);

function HeaderLayout() {
  const { isSearchOpen, onSearchToggle } = useSearchPanel();
  const segment = useSelectedLayoutSegment();

  if (segment && excludedSegments.has(segment)) return null;

  return (
    <div>
      <Header onSearchToggle={onSearchToggle} isSearchOpen={isSearchOpen} />
      {isSearchOpen && <SearchPanel />}
    </div>
  );
}

export default HeaderLayout;
