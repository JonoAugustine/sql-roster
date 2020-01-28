const inq = require("inquirer");

/**
 * A wrapper around an Inquirer choice menu.
 *
 * @author Jonathan Augustine
 */
class Menu {
  /**
   *
   * @param {Menu} parent - Parent menu to open when exiting this menu.
   * @param {Map<string, ((Menu|function))>} options - Options for this menu
   * mapped to the menu or function they invoke.
   */
  constructor(options, parent) {
    this.parent = parent;
    this.options = options;

    this.options.set(
      this.parent ? "exit" : "back",
      this.parent || (() => process.exit(0))
    );
  }

  /**
   * Opens this menu.
   */
  async open() {
    // Get choice
    const { choice } = await inq.prompt({
      name: "choice",
      type: "list",
      choices: [...this.options.keys()]
    });
    // Find operation
    const op = this.options.get(choice);
    // Execute
    if (op instanceof Menu) {
      op.open();
    } else {
      op(this);
    }
  }
}

module.exports = Menu;
