

const data = [
    { data: { id: 'so', label: 'so' } },
    { data: { id: 'sid1', label: 'netapp1', type: 'storage', parent: 'so' } },
    { data: { id: 'sid2', label: 'netapp2', type: 'storage', parent: 'so' } },
    { data: { id: 'sid3', label: 'hp3par', type: 'storage', parent: 'so' } },
    { data: { id: 'sid4', label: 'isilon', type: 'storage', parent: 'so' } },
    { data: { id: 'pid1', label: 'pool1', type: 'pool' } },
    { data: { id: 'pid2', label: 'pool2', type: 'pool' } },
    { data: { id: 'pid3', label: 'pool3', type: 'pool' } },
    { data: { id: 'vid1', label: 'vol1', type: 'volume' } },
    { data: { id: 'vid2', label: 'vol2', type: 'volume' } },
    { data: { id: 'vid3', label: 'vol3', type: 'volume' } },
    { data: { id: 'vid4', label: 'vol4', type: 'volume' } },
    { data: { id: 'vid5', label: 'vol5', type: 'volume' } },

    { data: { id: 'pid11', label: 'pool11', type: 'pool' } },
    { data: { id: 'pid12', label: 'pool12', type: 'pool' } },
    { data: { id: 'pid13', label: 'pool13', type: 'pool' } },
    { data: { id: 'vid11', label: 'vol11', type: 'volume' } },
    { data: { id: 'vid12', label: 'vol12', type: 'volume' } },
    { data: { id: 'vid13', label: 'vol13', type: 'volume' } },
    { data: { id: 'vid14', label: 'vol14', type: 'volume' } },
    { data: { id: 'vid15', label: 'vol15', type: 'volume' } },

    { data: { id: 'pid21', label: 'pool21', type: 'pool' } },
    { data: { id: 'pid22', label: 'pool22', type: 'pool' } },
    { data: { id: 'pid23', label: 'pool23', type: 'pool' } },
    { data: { id: 'vid21', label: 'vol21', type: 'volume' } },
    { data: { id: 'vid22', label: 'vol22', type: 'volume' } },
    { data: { id: 'vid23', label: 'vol23', type: 'volume' } },
    { data: { id: 'vid24', label: 'vol24', type: 'volume' } },
    { data: { id: 'vid25', label: 'vol25', type: 'volume' } },

    { data: { id: 'pid31', label: 'pool31', type: 'pool' } },
    { data: { id: 'pid32', label: 'pool32', type: 'pool' } },
    { data: { id: 'pid33', label: 'pool33', type: 'pool' } },
    { data: { id: 'vid31', label: 'vol31', type: 'volume' } },
    { data: { id: 'vid32', label: 'vol32', type: 'volume' } },
    { data: { id: 'vid33', label: 'vol33', type: 'volume' } },
    { data: { id: 'vid34', label: 'vol34', type: 'volume' } },
    { data: { id: 'vid35', label: 'vol35', type: 'volume' } },

    { data: { source: 'pid1', target: 'sid1' } },
    { data: { source: 'pid2', target: 'sid1' } },
    { data: { source: 'pid3', target: 'sid1' } },
    { data: { source: 'vid1', target: 'pid1' } },
    { data: { source: 'vid2', target: 'pid1' } },
    { data: { source: 'vid3', target: 'pid1' } },
    { data: { source: 'vid4', target: 'pid2' } },
    { data: { source: 'vid5', target: 'pid3' } },

    { data: { source: 'pid11', target: 'sid2' } },
    { data: { source: 'pid12', target: 'sid2' } },
    { data: { source: 'pid13', target: 'sid2' } },
    { data: { source: 'vid11', target: 'pid11' } },
    { data: { source: 'vid12', target: 'pid11' } },
    { data: { source: 'vid13', target: 'pid11' } },
    { data: { source: 'vid14', target: 'pid12' } },
    { data: { source: 'vid15', target: 'pid13' } },

    { data: { source: 'pid21', target: 'sid3' } },
    { data: { source: 'pid22', target: 'sid3' } },
    { data: { source: 'pid23', target: 'sid3' } },
    { data: { source: 'vid21', target: 'pid21' } },
    { data: { source: 'vid22', target: 'pid21' } },
    { data: { source: 'vid23', target: 'pid21' } },
    { data: { source: 'vid24', target: 'pid22' } },
    { data: { source: 'vid25', target: 'pid23' } },

    { data: { source: 'pid31', target: 'sid4' } },
    { data: { source: 'pid32', target: 'sid4' } },
    { data: { source: 'pid33', target: 'sid4' } },
    { data: { source: 'vid31', target: 'pid31' } },
    { data: { source: 'vid32', target: 'pid31' } },
    { data: { source: 'vid33', target: 'pid31' } },
    { data: { source: 'vid34', target: 'pid32' } },
    { data: { source: 'vid35', target: 'pid23' } },
];


// 아래는 공식 사이트에 올라와 있는 예제 코드입니다
let cy = cytoscape({

    container: document.getElementById('cy'), // container to render in

    elements: data,

    style: [ // the stylesheet for the graph
        {
            selector: 'node',
            style: {
                'background-color': '#666',
                'label': 'data(label)'
            }
        },

        {
            selector: '[type = "storage" ]',
            style: {
                'background-color': '#11479e',
                shape: 'round-rectangle',
                label: 'data(label)'
            }
        },
        {
            selector: '[type = "pool" ]',
            style: {
                'background-color': '#11479e',
                shape: 'octagon',
                label: 'data(label)'
            }
        },
        {
            selector: '[type = "volume" ]',
            style: {
                'background-color': '#11479e',
                shape: 'ellipse',
                label: 'data(label)'
            }
        },

        {
            selector: 'edge',
            style: {
                'width': 2,
                'target-arrow-shape': 'triangle',
                'line-color': '#9dbaea',
                'target-arrow-color': '#9dbaea',
                'curve-style': 'bezier'
            }
        }
    ],

    layout: {
        name: 'fcose',
        rows: 5
    }
});

let thislayout = cy.layout({
    name: 'fcose',
    randomize: false,
    animate: true, // whether to transition the node positions
    animationDuration: 500 // duration of animation in ms if enable                
});


cy.on('tap', function (e) {
    const url = e.target.data('label')
    //if (url && url !== '') { window.open(url); }
    let out = document.getElementById('datasource');
    out.setAttribute('value', url);
    thislayout.run();
});