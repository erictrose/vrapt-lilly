  var client = new JanusClientConnection({
    host: 'ws://vrapt.xyz:5566',
    userId: 'WebClientUser' + Math.floor(Math.random() * 100000),
    roomUrl: 'http://erictrose.github.io/vrapt/'
  });

  client.addEventListener('connect', handleConnect);
  client.addEventListener('message', handleMessage);

  function addMessage(msg) {
    // Add new message to bottom of chat list, and scroll to bottom
    var li = document.createElement('li');
    li.innerHTML = msg;

    var messages = document.getElementById('chat');
    messages.appendChild(li);
    messages.scrollTop = messages.scrollHeight;
  }
  function handleConnect(ev) {
    console.log('client connected', ev);

    addMessage('Connected to server as ' + client._userId);
  }
  function handleMessage(ev) {
    var msg = ev.data;
    console.log('got message', msg);

    if (msg.method == 'user_chat') {
      addMessage('[' + msg.data.userId + '] ' + msg.data.message);
    }
  }
  function sendMessage() {
    var input = document.getElementById('chat_input');
    if (input.value.length > 0) {
      client.send({'method': 'chat', data: input.value});
      addMessage('[' + client._userId + '] ' + input.value);
      input.value = '';
      input.focus();
    }
  }

console.log('chat loaded');
