export interface UseComponentStoreProps {
  isBackgroundMusicMuted: boolean;
  isSidebarOpen: boolean;
  sidebarType: 'filter' | 'info';
  updateIsBackgroundMusicMuted: (value: boolean) => void;
  updateIsSidebarOpen: (value: boolean) => void;
  updateSidebarType: (value: 'filter' | 'info') => void;
}
