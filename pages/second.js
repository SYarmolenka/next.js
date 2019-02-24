import { withRouter } from 'next/router';
import withStyles from 'react-jss';

const SecondPage = ({ router, classes }) => (
  <div>
    <p>Second Page</p>
    <button
      onClick={() => router.push('/')}
      className={classes.bgd}
    >
      First Page
    </button>
  </div>
);

export default withStyles(({ background }) => ({
  bgd: {
    background,
  }
}))(withRouter(SecondPage))