  /**
   * Simple JanusWebClient test
   * Connect to a server and spit out events as we see them
   */
  var client = new JanusClientConnection({
    host: 'ws://vrapt.xyz:5566',
    userId: 'WebClientUser' + Math.floor(Math.random() * 100000),
    roomUrl: 'http://www.janusvr.com/index.html'
  });

  client.addEventListener('connect', handleConnect);
  client.addEventListener('message', handleMessage);

  function addMessage(msg) {
    // Add new message to top of messages list
    var li = document.createElement('li');
    li.innerHTML = msg;

    var messages = document.getElementById('messages');
    messages.insertBefore(li, messages.firstChild);
  }
  function handleConnect(ev) {
    console.log('client connected', ev);

    addMessage('Connected to server as ' + client._userId);
  }
  function handleMessage(ev) {
    var msg = ev.data;
    console.log('got message', msg);

    var msgstr = '[' + msg.method + ']';
    if (msg.data) msgstr += ' ' + JSON.stringify(msg.data, null, 2);
    addMessage(msgstr);
  }

console.log('chat loaded');