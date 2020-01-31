import React from 'react'
import Lottie from 'lottie-react-native'
import { View } from 'react-native'

class SpinnerCheckMark extends React.Component {
  componentDidMount() {
    // const { showAnim, onFinish } = this.props

    // if (showAnim) {
      this.anim.play()
    // } else {
    //   this.anim.goToAndStop(this.anim.totalFrames - 1, true)
    // }

    // this.anim.onComplete = () => {
    //   if (onFinish && typeof onFinish === 'function') {
    //     onFinish()
    //   }
    // }
  }

  setAnim = anim => {
    this.anim = anim
  }

  render() {
    const { height = 200, width = 200, style = {backgroudColor: 'red'} } = this.props

    return (
      <View style={style}>
        <Lottie
          ref={this.setAnim}
          source={this.props.source}
          style={{
            width,
            height,
          }}
          loop={true}
        />
      </View>
    )
  }
}

export default SpinnerCheckMark
