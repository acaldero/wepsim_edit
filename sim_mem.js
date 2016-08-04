
        //
        // (c) Javier Prieto, F'elix Garc'ia-Carballeira, Alejandro Calder'on
        //
        // Memory
        //

        var MP       = new Object();
        var segments = new Object();


        /*
         *  States
         */

        sim_states["MRDY"]           = { name: "MRDY",           nbits: "1", value: 0, default_value: 0, draw_data: [] };


        /*
         *  Signals
         */

        sim_signals["R"]     = { name: "R", type: "L", value: 0, default_value:0, nbits: "1", 
		                 behavior: ["NOP", "MEM_READ BUS_AB BUS_DB; MOVE_BITS RWBWA 5 1 R; FIRE RWBWA"],
                                 fire_name: ['svg_p:text3533-5-2'], 
                                 draw_data: [[], ['svg_p:path3557']], 
                                 draw_name: [[], []]};

        sim_signals["W"]     = { name: "W", type: "L", value: 0, default_value:0, nbits: "1", 
		                 behavior: ["NOP", "MOVE_BITS RWBWA 4 1 W; FIRE RWBWA; MEM_WRITE BUS_AB BUS_DB"],
                                 fire_name: ['svg_p:text3533-5-08'], 
                                 draw_data: [[], ['svg_p:path3559']], 
                                 draw_name: [[], []] };

        sim_signals["RWBWA"] = { name: "RWBWA", type: "L", value: 0, default_value:0, nbits: "6", 
                                 behavior: ['NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'BSEL BUS_DB 0 8 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 8 8 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 16 8 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 24 8 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 0 16 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 0 16 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 0 16 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 0 16 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 16 16 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 16 16 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 16 16 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 16 16 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 0 32 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 0 32 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 0 32 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 0 32 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 0 8 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 8 8 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 16 8 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 24 8 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 0 16 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 0 16 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 0 16 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 0 16 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 16 16 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 16 16 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 16 16 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 16 16 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 0 32 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 0 32 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 0 32 BUS_DB 0; FIRE SBWA',
                                            'BSEL BUS_DB 0 32 BUS_DB 0; FIRE SBWA',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP',
                                            'NOP'],
                                 fire_name: [], 
                                 draw_data: [[], []], 
                                 draw_name: [[], []] };


        /*
         *  Syntax of behaviors
         */

        syntax_behavior["MEM_READ"] = { nparameters: 3, 
                                        types: ["E", "E"],
                                        operation: function (s_expr) 
                                                   {
						      var value   = 0;
						      var address = sim_states[s_expr[1]].value ;
						      if (typeof MP[address] != "undefined") {
						   	  value = MP[address];
						      }
                                                      sim_states[s_expr[2]].value = value ;
				                      show_memories('MP', MP, address) ;
                                                   }
                                   };

        syntax_behavior["MEM_WRITE"] = { nparameters: 3, 
                                         types: ["E", "E"],
                                         operation: function (s_expr) {
						      var value   = sim_states[s_expr[2]].value ;
						      var address = sim_states[s_expr[1]].value ;
						      MP[address] = value ;
				                      show_memories('MP', MP, address) ;
                                                    }
                                   };


