import { store } from '@things-factory/shell'
import { UPDATE_EXTENSION } from '@things-factory/import-base'

function csvToJson(params) {
  const rawCsv = params.split('\n')
  let header = rawCsv.splice(0, 1)
  header = header[0].split(',')
  const json = []

  rawCsv.forEach(csv => {
    const dataArray = csv.split(',')
    let dataObj = {}

    dataArray.map((data, idx) => {
      dataObj[header[idx]] = data
      return dataObj
    })

    json.push(dataObj)
  })

  return json
}

export default function bootstrap() {
  store.dispatch({
    type: UPDATE_EXTENSION,
    extensions: {
      csv: {
        import: csvToJson
      }
    }
  })
}
