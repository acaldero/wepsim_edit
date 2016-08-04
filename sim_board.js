
        //
        // (c) Javier Prieto, F'elix Garc'ia-Carballeira, Alejandro Calder'on
        //
        // MotherBoard
        //


        /*
         *  States
         */

        var sim_states = new Object() ;


        /*
         *  Signals
         */

        var sim_signals = new Object();
        var fire_stack  = new Array() ;


        /*
         *  Syntax of behaviors
         */

        var syntax_behavior = new Object();

        // Print Signal
        syntax_behavior["PRINT_S"] = { nparameters: 2,
                                       types: ["S"],
                                       operation: function(s_expr)
                                                  {
                                                      console.log(s_expr[1] + ': ' + sim_signals[s_expr[1]].value);
                                                  }
                                     };

        // Print State
        syntax_behavior["PRINT_E"] = { nparameters: 2,
                                       types: ["E"],
                                       operation: function(s_expr)
                                                  {
                                                      console.log(s_expr[1] + ': ' + sim_states[s_expr[1]].value);
                                                  }
                                     };

