import renderer from 'react-test-renderer';
import Calculator from '../component/calculator';

it('renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
