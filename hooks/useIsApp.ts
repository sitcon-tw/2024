export default function useIsApp() {
  if (window === undefined) return false;
  return new URLSearchParams(window.location.search).get("mode") === "app";
}
