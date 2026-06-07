import { icons } from "./icons";

interface TopbarProps {
  onToggleMenu: () => void;
}

export function Topbar({ onToggleMenu }: TopbarProps) {
  return (
    <header className="topbar">
      <button
        className="mobile-menu"
        id="menuToggle"
        aria-label="Open menu"
        onClick={onToggleMenu}
      >
        <span className="icon">{icons.menu}</span>
      </button>
      <div className="title-block">
        <h1>Midlife Crisis in Women</h1>
        <p>
          Interactive dashboard for understanding and treating midlife obesity.
        </p>
      </div>
    </header>
  );
}
