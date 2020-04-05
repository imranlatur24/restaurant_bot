// POST https://graph.facebook.com/v2.6/me/messenger_profile?access_token=<PAGE_ACCESS_TOKEN>

 {
  "persistent_menu":[
    {
      "locale":"default",
      "composer_input_disabled": false,
      "call_to_actions":[
        {
          "title":"Persistent Options",
          "type":"nested",
          "call_to_actions":[
            {
              "title":"Share App",
              "type":"postback",
              "payload":"Share App"
            },
            {
              "type":"web_url",
              "title":"Go to Google",
              "url":"https://google.com",
              "webview_height_ratio":"full"
            },
            {
              "type":"web_url",
              "title":"Go to Facebook",
              "url":"https://facebook.com/",
              "webview_height_ratio":"full"
            }
          ]
        },
        {
	  "title":"Show Main Menu",
	  "type":"postback",
	  "payload":"Main Menu"
        }
      ]
    }
  ]
}