export default function useIsApp() {
  return new URLSearchParams(window.location.search).get("mode") === "app";
}
