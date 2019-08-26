Blockly.JavaScript["ky_010_light_blocking_block"] = function(block) {
    var text_ky_010_light_blocking_pin = block.getFieldValue(
      "KY_010_LIGHT_BLOCKING_PIN"
    );
    var variable_ky_010_light_blocking_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("KY_010_LIGHT_BLOCKING_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
	#VARIABLE
	int KY_010_LIGHT_BLOCKING_PIN = ${text_ky_010_light_blocking_pin}; // define photo interrupter signal pin
	#END
	#SETUP
		pinMode(KY_010_LIGHT_BLOCKING_PIN, INPUT); //photo interrupter pin as input
	#END
	${variable_ky_010_light_blocking_value}=digitalRead(KY_010_LIGHT_BLOCKING_PIN);
    `;
    return code;
  };