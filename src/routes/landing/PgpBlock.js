import { React, useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const PgpBlock = () => {
  const [copied, setCopied] = useState(false);

  const pgpkey = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mI0EZ4MjIAEEALgJ55dTRBmEq/IqYFqjRFIOSmiKy+Lg4o8REIYkD8sfmPBBHHrh
PED4qPcM+T+Py8ymnKST6wztr600lH1U9Fx4wYBkspmZuEiBXIdp8xvi2qA+Q61Z
H1eZttzGVKCUCYQIHcTnVsYGpG4RnjD17jiKNqJfAxfHdwNB4ybZNuvxABEBAAG0
a0FyZ2h5YSBCIFNhcmthciAoSWYgeW91IGhhdmUgZ290dGVuIHRoaXMgZmFyIHlv
dSBrbm93IHRoZSBnYW1lIGlzIHJpZ2dlZCAtIHNpbG8pIDxzYXBhbWFrcmlkYS5z
YkBnbWFpbC5jb20+iNEEEwEIADsWIQQUP0yH3tl71K2tdduL8MeNfCGdwAUCZ4Mj
IAIbAwULCQgHAgIiAgYVCgkICwIEFgIDAQIeBwIXgAAKCRCL8MeNfCGdwGXtA/91
dqlVdESHoX4N3mN3H4VP813JJVnJ1lqbPBpEEes70Kn/X6UxT7x3nlCwf7U+kY1W
ClE10IDyLFOhsOlZ0C/Ue0JHk/QOuIcO6ytwz84/OECiF+DeGQryG2a1kobaqG6P
gELbz4Ge9GFnJovyYV6CP/AM/4o5Y+Ew6OajBCcwQLiNBGeDIyABBAC8PdiPgTwV
JWegK+T5yXtqPuDjVwiOh4UeGenTs6I6CXW60Rx1bfy5YQI1WhVDXJB7C50Z6/fH
jk3KggNWg6DLCiVIAHz72TnNy3OafFMxF77Q7PuPA1FEK2WKv30VDgsps8hQsoCl
CS1vpcHgRNsAV4BzOiL4j085t2nZGve9yQARAQABiLYEGAEIACAWIQQUP0yH3tl7
1K2tdduL8MeNfCGdwAUCZ4MjIAIbDAAKCRCL8MeNfCGdwO4vA/9ma99/CPd5Dbyy
KCQt+1P4epclmq6QOfrSbJjgGZBU/e6bvQdHT5cCvebG1szLuZai2cOMFlYw1a1B
GHP4tXFN8i99zmAbU707yzip7PwLlhlKfSE7GB8IeUh473OLXvQ6FUthbtGWkQjA
58aQMmNhHLv+YbrwBn7y9YvrU82eKQ==
=+3KQ
-----END PGP PUBLIC KEY BLOCK-----
`
const copyToClipboard = () => {
  navigator.clipboard.writeText(pgpkey);
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
};


  return (
    <div className="fancy-code">
      <div className="fancy-code__header">
        <span className="fancy-code__language">{'PGP'}</span>
        <button className="fancy-code__copy" onClick={copyToClipboard}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <SyntaxHighlighter
        language={"text"}
        style={atomDark}
        customStyle={{
          margin: 0,
          borderRadius: '0 0 4px 4px',
          padding: '1rem',
        }}
      >
        {pgpkey || 'Loading key...'}
      </SyntaxHighlighter>
    </div>
  );
};

export default PgpBlock;
