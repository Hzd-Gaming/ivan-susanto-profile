export interface UseComponentStoreProps {
  footerDescription: string;
  isBackgroundMusicMuted: boolean;
  isSidebarOpen: boolean;
  sidebarType: 'filter' | 'info';
  updateFooterDescription: (value: string) => void;
  updateIsBackgroundMusicMuted: (value: boolean) => void;
  updateIsSidebarOpen: (value: boolean) => void;
  updateSidebarType: (value: 'filter' | 'info') => void;
}
