import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import { VueComponent } from '../shims-vue';

import styles from './Display.css?module'

@Component
export default class Display extends VueComponent {

  private get expression() {
    return this.$store.state.expression
  }

  private get result() {
    return this.$store.state.result ? `= ${this.$store.state.result}` : ''
  }

  render() {
    return (
      <div class={styles.display}>
        <div class={styles.expression}>
          <div class={styles.text}>{this.expression}</div>
        </div>
        <div class={styles.result}>
          <div class={styles.text}>{this.result}</div>
        </div>
      </div>
    )
  }
}
