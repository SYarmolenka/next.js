import withStyles from 'react-jss';
import Link from 'next/link';

const FirstPage = ({ classes }) => (
    <div className={classes.bgd}>
      <p>First Page</p>
      <Link href="/second" prefetch>
        <a>Second Page</a>
      </Link>
    </div>
);

const styles = {
  bgd: {
    background: '#cccccc',
  },
};

export default withStyles(styles)(FirstPage);

