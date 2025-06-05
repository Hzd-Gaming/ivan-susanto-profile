export interface UseComponentStoreProps {
  footerDescription: string;
  isBackgroundMusicMuted: boolean;
  isSidebarOpen: boolean;
  updateFooterDescription: (value: string) => void;
  updateIsBackgroundMusicMuted: (value: boolean) => void;
  updateIsSidebarOpen: (value: boolean) => void;
}
