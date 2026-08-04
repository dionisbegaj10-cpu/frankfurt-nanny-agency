/**
 * Simple double-rule frame used around the menu drawer.
 * Kept intentionally plain so the card reads as "framed stationery"
 * without borrowing ornament from anyone else's brand.
 */
export function DecorativeBorderFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-2 border border-rust/50">
      <div className="border border-rust/25 h-full">{children}</div>
    </div>
  );
}
