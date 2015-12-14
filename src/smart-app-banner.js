import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Radium from 'radium'
import PureRender from 'pure-render-decorator'

import CloseButton from './close-button'
import ViewButton from './view-button'
import Header from './header'
import Icon from './icon'
import { BaseStyle } from './stylesheets'

@Radium
@PureRender
class ReactSmartAppBanner extends Component {

  static propTypes = {
    closeButton: React.PropTypes.shape({
      attributes: React.PropTypes.object,
      text: React.PropTypes.string,
      style: React.PropTypes.object,
    }),
    viewButton: React.PropTypes.shape({
      attributes: React.PropTypes.object,
      text: React.PropTypes.string,
    }),
    header: React.PropTypes.shape({
      title: React.PropTypes.string,
      subtitle: React.PropTypes.string,
    }),
    icon: React.PropTypes.object,
    os: React.PropTypes.oneOf(['android', 'windows', 'ios']),
  }

  state = {
    os: this.props.os || 'android',
  }

  render() {
    return (
      <section style={[
          BaseStyle.smartAppBanner.all,
          BaseStyle.smartAppBanner[this.state.os],
        ]}
      >
        <CloseButton {... this.mergeProps('closeButton')}/>
        <Icon {... this.mergeProps('icon')}/>
        <Header {... this.mergeProps('header')}/>
        <ViewButton {... this.mergeProps('viewButton')}/>
      </section>
    )
  }

  mergeProps = (component) => {
    return Object.assign({}, this.props[component], {os: this.state.os})
  }

}

export default ReactSmartAppBanner
