Blockly.Blocks["ky_010_light_blocking_block"] = {
    init: function() {
      this.appendDummyInput().appendField("KY-010 LIGHT BLOCKING");
      this.appendDummyInput()
        .appendField("PIN")
        .appendField(
          new Blockly.FieldTextInput("0"),
          "KY_010_LIGHT_BLOCKING_PIN"
        )
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("KY_010_LIGHT_BLOCKING_VALUE"),
          "KY_010_LIGHT_BLOCKING_VALUE"
        );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };