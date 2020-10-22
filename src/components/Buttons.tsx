import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import { VueComponent } from '../shims-vue';

import styles from './Buttons.css?module'

@Component
export default class Buttons extends VueComponent {

  private disabled = false;

  private addSymbol (event: MouseEvent) {
    const target = event.target as HTMLDivElement;
    const expression = this.$store.state.expression + target.innerText
    this.$store.commit('changeExpression', expression)
    if (target.innerText !== '+' && target.innerText !== '-') this.$store.dispatch('calculate')
  }

  private clearExpression (): void {
    this.$store.commit('changeExpression', '')
    this.$store.commit('changeResult', '')
  }

  private calculate (): void {
    this.disabled = true
    this.$store.dispatch('getResult')
      .then(response => {
        this.disabled = false
      })
  }

  render() {
    return (
      <div class={styles.wrapper}>
        <button class={styles.button} onClick={this.addSymbol} disabled={this.disabled}>1</button>
        <button class={styles.button} onClick={this.addSymbol} disabled={this.disabled}>2</button>
        <button class={styles.button} onClick={this.addSymbol} disabled={this.disabled}>3</button>
        <button class={styles.red} onClick={this.clearExpression} disabled={this.disabled}>C</button>

        <button class={styles.button} onClick={this.addSymbol} disabled={this.disabled}>4</button>
        <button class={styles.button} onClick={this.addSymbol} disabled={this.disabled}>5</button>
        <button class={styles.button} onClick={this.addSymbol} disabled={this.disabled}>6</button>
        <button class={styles.red} onClick={this.addSymbol} disabled={this.disabled}>-</button>

        <button class={styles.button} onClick={this.addSymbol} disabled={this.disabled}>7</button>
        <button class={styles.button} onClick={this.addSymbol} disabled={this.disabled}>8</button>
        <button class={styles.button} onClick={this.addSymbol} disabled={this.disabled}>9</button>
        <button class={styles.red} onClick={this.addSymbol} disabled={this.disabled}>+</button>

        <button class={styles.wide} onClick={this.addSymbol} disabled={this.disabled}>0</button>
        <button class={styles.red} onClick={this.calculate} disabled={this.disabled}>=</button>
      </div>
    )
  }
}
