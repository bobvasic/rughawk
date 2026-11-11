// The hawk mark, its colors and its motion are CSS (.hawk-logo in globals.css); this is only the stack of layers.
export function Logo({ size = 36 }: { size?: number }) {
  return (
    <span className="hawk-logo" style={{ width: size, height: size }} aria-hidden="true">
      <span className="hawk-logo__halo" />
      <span className="hawk-logo__mark" />
      <span className="hawk-logo__eye" />
    </span>
  );
}
