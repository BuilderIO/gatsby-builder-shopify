/** @jsx jsx */
import { jsx } from 'theme-ui';
import Img from 'gatsby-image';

export interface ThumbnailProps {
  src: any; // for now;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  name: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ src, onClick, name }) => {
  return (
    <button
      name={name}
      sx={{
        cursor: 'pointer',
        border: '1px solid gray',
        padding: 1,
        '&:focus': {
          outline: 'none',
          borderColor: 'black',
        },
      }}
      onClick={onClick}
    >
      <Img fluid={src.localFile.childImageSharp.fluid} />
    </button>
  );
};

export default Thumbnail;
