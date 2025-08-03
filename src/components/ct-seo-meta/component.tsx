import { Helmet } from 'react-helmet-async';

import type { CTSeoMetaProps } from './type';

const CTSeoMeta: React.FC<CTSeoMetaProps> = ({ meta }) => {
  const {
    titlePage = 'Ivan Susanto Profile',
    descriptionPage = 'Chef profile of Ivan Susanto with fancy dishes preview and professional experiences',
  } = meta || {};

  return (
    <Helmet>
      <title>{titlePage}</title>
      <meta name="description" content={descriptionPage} />

      {/** Please add more meta if needed */}
    </Helmet>
  );
};

export default CTSeoMeta;
