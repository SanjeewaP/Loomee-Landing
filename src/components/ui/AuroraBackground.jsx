/**
 * Replaces the single `hero-bg-gradient` div with three slowly-drifting
 * coloured blobs that together create an aurora-borealis-like glow.
 * Purely CSS-animated; no JS on the render path.
 */
export default function AuroraBackground() {
  return (
    <div className="aurora-bg" aria-hidden="true">
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
    </div>
  )
}
