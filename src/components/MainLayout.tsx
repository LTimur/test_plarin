import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Header } from "./Header";
import { FullPageError } from "./FullPageError";

export function MainLayout() {
  return (
    <ErrorBoundary FallbackComponent={FullPageError}>
      <Header />
      <Outlet />
    </ErrorBoundary>
  );
}
