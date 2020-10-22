import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import { VueComponent } from '../shims-vue';
import Display from './Display';
import Buttons from './Buttons';

import styles from './Calculator.css?module'

@Component
export default class Calculator extends VueComponent {

  render() {
    return (
      <div class={styles.calculator}>
        <Display />
        <Buttons />
      </div>
    )
  }
}
