import { MultiDirectedGraph } from 'graphology'

export const useApp = () => {
  const graph = new MultiDirectedGraph()
  graph.addNode('A', {
    x: 0,
    y: 0,
    label: 'Node A',
    size: 10,
    color: '#44f',
  })
  graph.addNode('B', {
    x: 1,
    y: 1,
    label: 'Node B',
    size: 10,
    color: '#red',
  })


  graph.addEdgeWithKey('rel1', 'A', 'B', { label: 'REL_1' })

  const handleAddNode = (label: string, relatedNode: string, color: string) => {
    const count = graph.nodes().length

    graph.addNode(label, {
      x: count*2,
      y: count + 1,
      label,
      size: 10,
      color,
    })
    graph.addEdgeWithKey(`rel${count}`, relatedNode, label, {
      label: `REL_${count}`,
    })
  }


  return { graph, handleAddNode }
}
