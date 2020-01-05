
import React from 'react'

function withOnChange(WrappedComponent) {
  // console.log(WrappedComponent, 'WrappedComponent')
  return class extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              name: '',
          };
      }

      onChange = (e) => {
        console.log(this.props, 'oprops')
        const { inputValueFn, item } = this.props;
          this.setState({
              name: e.target.value,
          });
          inputValueFn(this.state.name)
          // console.log(inputValueFn, item);
      }


      render() {
          const newProps = {
              name: {
                  value: this.state.name,
                  onChange: this.onChange,
              },
          };
          return <WrappedComponent {...this.props} {...newProps} />;
      }
  };
}

// 

const NameInput = props => (<input name="name" {...props.name} />);


export default withOnChange(NameInput);
