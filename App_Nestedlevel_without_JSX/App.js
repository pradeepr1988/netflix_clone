/**
 *
 * <div id="parent">
 *  <div id="child">
 *  <h1> Iam an H1 tag</h1>
 * <h2> Iam an H2 tag</h2>
 * </div>
 * </div>
 *
 *
 */
const heading = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'Iam an H1 tag'),
    React.createElement('h2', {}, 'Iam an H2 tag'),
  ])
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render(heading);
