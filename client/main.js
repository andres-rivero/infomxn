var rate = require('./rate.json');


  Template.leaderboard.helpers({
      'banamex_buy': function(){
          return rate.banamex.buy;
      },
      'banamex_sell': function(){
          return rate.banamex.sell;
      },
      'bancomer_buy': function(){
          return rate.bancomer.buy;
      },
      'bancomer_sell': function(){
          return rate.bancomer.sell;
      },
      'banorte_buy': function(){
          return rate.banorte.buy;
      },
      'banorte_sell': function(){
          return rate.banorte.sell;
      },
      'banregio_buy': function(){
          return rate.banregio.buy;
      },
      'banregio_sell': function(){
          return rate.banregio.sell;
      },
      'cibanco_buy': function(){
          return rate.cibanco.buy;
      },
      'cibanco_sell': function(){
          return rate.cibanco.sell;
      },
      'hsbc_buy': function(){
          return rate.hsbc.buy;
      },
      'hsbc_sell': function(){
          return rate.hsbc.sell;
      },
      'monex_buy': function(){
          return rate.monex.buy;
      },
      'monex_sell': function(){
          return rate.monex.sell;
      },
      'santander_buy': function(){
          return rate.santander.buy;
      },
      'santander_sell': function(){
          return rate.santander.sell;
      },
      'scotiabank_buy': function(){
          return rate.scotiabank.buy;
      },
      'scotiabank_sell': function(){
          return rate.scotiabank.sell;
      }
  });
