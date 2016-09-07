import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('account-articles-column', 'Integration | Component | account articles column', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{account-articles-column}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#account-articles-column}}
      template block text
    {{/account-articles-column}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
