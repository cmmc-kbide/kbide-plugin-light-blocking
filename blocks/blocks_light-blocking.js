Blockly.Blocks['ky_010_light_blocking_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("KY-010 LIGHT BLOCKING");
    this.appendValueInput("KY_010_TAP_PIN")
        .setCheck("Number")
        .appendField("PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};