/***********************
* Azioni di composizione in Adobe Edge Animate
*
* Modifica con cautela questo file di testo, prestando attenzione a salvare 
* firme e commenti di funzione che iniziano con "Edge" per mantenere 
* possibilità di interagire con le azioni dall'interno di Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // alias per le classi usate più di frequente in Edge
   //Edge symbol: 'stage'
   (function(symbolName) {
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "marriott-index");