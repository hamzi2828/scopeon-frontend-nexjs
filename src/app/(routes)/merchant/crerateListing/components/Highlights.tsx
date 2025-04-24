type HighlightsProps = {
  value: string;
  onChange: (val: string) => void;
};

const Highlights = ({ value, onChange }: HighlightsProps) => (
  <textarea
    className="border rounded px-3 py-2 w-full"
    placeholder="Highlights"
    value={value}
    onChange={e => onChange(e.target.value)}
  />
);

export default Highlights;