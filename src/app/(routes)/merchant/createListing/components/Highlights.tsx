type HighlightsProps = {
  value: string;
  onChange: (val: string) => void;
};

const Highlights = ({ value, onChange }: HighlightsProps) => (
  <div className="max-w-3xl mx-auto p-4">
    <h2 className="text-xl font-semibold mb-4">Highlights</h2>
    <label htmlFor="highlights" className="block text-gray-800 font-medium mb-1">
      What makes your campaign stand out?
    </label>
    <textarea
      id="highlights"
      rows={3}
      className="w-full border border-gray-300 rounded-md p-2 mb-2 text-gray-800"
      placeholder="Chef Thierry Lefeuvre devises a menu of traditional French food; escargot, mushroom ravioli, white truffle flatbread"
      value={value}
      onChange={e => onChange(e.target.value)}
    ></textarea>
    <div className="bg-gray-100 p-4 rounded-md text-sm text-gray-600 mb-4">
      <strong>Example:</strong> Chef Thierry Lefeuvre devises a menu of traditional French food; escargot, mushroom ravioli, white truffle flatbread
    </div>
  </div> 
);

export default Highlights;