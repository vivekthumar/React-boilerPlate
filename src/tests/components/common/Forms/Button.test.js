import { shallow } from 'enzyme';

import Button from '../../../../components/common/Button';

/** @test {Button Component} */
describe('Button Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.find('button')).toHaveLength(1);
  });
});