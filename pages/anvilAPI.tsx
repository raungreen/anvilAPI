import Layout from '../components/Layout';
import Link from 'next/link';
import axios from 'axios';
// import { dataArray } from '../utils/sample-api';

const Index = props => (
  <Layout>
    <h1>Member {data.name}</h1>
    <div>
      {props.data.map(({ data }) => (
        <ul key={data.id}>
          <Link as={`/p/${data.id}`} href={`/post`}>
            <a>{data.name}</a>
          </Link>
        </ul>
      ))}
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await axios.get(
    'https://storage.googleapis.com/ca-headless-cms.appspot.com/2/2019/01/kevin@2x.jpg'
  );
  const data = await res.data;

  console.log(`Show data fetched. This is ${data.name}: ${data}`);

  return {
    data: data
  };
};
