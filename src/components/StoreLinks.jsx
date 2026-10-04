import { AppleIcon, PlayIcon } from "./icons";

export default function StoreLinks({ name, playStoreUrl, appStoreUrl }) {
  if (!playStoreUrl && !appStoreUrl) return null;
  return (
    <div className="store-links">
      {playStoreUrl && (
        <a
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on the Play Store`}
        >
          <PlayIcon s={12} /> Play Store
        </a>
      )}
      {appStoreUrl && (
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on the App Store`}
        >
          <AppleIcon s={13} /> App Store
        </a>
      )}
    </div>
  );
}
