import { useSearchParams, Form, redirect, Link } from "react-router-dom"
import { useState, useEffect } from "react"
// 
import FormBS from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Table from "react-bootstrap/Table"
// 
import { updatePagination } from "../../components/Pagination.jsx"
import { generateMobLibrary, renderImageWithMobId, filterMobList, updateSearchResultCount } from "./utility.jsx"

// Map categories for filtering
const mapCategory = [
    "Maple Island",
    "Victoria Island",
    "Elnath",
    "Aquaroad",
    "Ludus Lake",
    "Ellin Forest",
    "Leafre",
    "Neo Tokyo",
    "Mu Lung",
    "Nihal Desert",
    "Masteria",
    "Temple of Time",
    "Singapore",
    "Malaysia",
    "Event",
    "Etc"
]

export default function Monster() {
    const [searchParams] = useSearchParams()

    const [mobLibrary, setMobLibrary] = useState({})

    useEffect(() => {
        const generatedMobLib = generateMobLibrary()
        setMobLibrary(generatedMobLib)
    }, [])

    const handleAdvancedSearchClick = (e) => {
        document.getElementById("advanced-table").classList.toggle("d-none")
        e.target.classList.toggle("d-none")
    }

    const filteredMobList = filterMobList({mobLibrary, searchParams})

    return (
        <div className="monster d-flex flex-column">
            {/* DropDown filter and Search input and Button */}
            <Form method="post" action="/monster">
                <div className="d-flex flex-wrap">

                    <div id="advanced-table" className="col-lg-6 flex-grow-1 d-none d-md-block">
                        <Table className="text-center" borderless >
                            <thead>
                                <tr>
                                    <th className="bg-transparent">筛选</th>
                                    <th className="bg-transparent">分类</th>
                                    <th className="bg-transparent">排序方式</th>
                                    <th className="bg-transparent">顺序</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="bg-transparent">
                                        <FormBS.Select aria-label="filter by" data-bs-theme="light" name="filterBy">
                                            <option value="any">全部</option>
                                            <option value="monster">普通怪物</option>
                                            <option value="boss">Boss</option>
                                        </FormBS.Select>
                                    </td>
                                    <td className="bg-transparent">
                                        <FormBS.Select aria-label="category by" data-bs-theme="light" name="categoryBy">
                                            <option value="any">全部</option>
                                            {mapCategory.map(mapName =>
                                                <option key={mapName} value={mapName}>{mapName}</option>
                                            )}
                                        </FormBS.Select>
                                    </td>
                                    <td className="bg-transparent">
                                        <FormBS.Select aria-label="order by" data-bs-theme="light" name="orderBy">
                                            <option value="id">ID</option>
                                            <option value="level">等级</option>
                                            <option value="exp">经验</option>
                                            <option value="maxHP">血量</option>
                                        </FormBS.Select>
                                    </td>
                                    <td className="bg-transparent">
                                        <FormBS.Select aria-label="sort by" data-bs-theme="light" name="sortBy">
                                            <option value="ascending">升序</option>
                                            <option value="descending">降序</option>
                                        </FormBS.Select>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div className="col-12 flex-grow-1 d-md-none px-2"><Button onClick={handleAdvancedSearchClick} className="w-100" variant="secondary">高级搜索</Button></div>

                    <div className="col-lg-6 flex-grow-1">
                        <Table className="text-center my-0" borderless >
                            <thead>
                                <tr className="d-none d-lg-block">
                                    <th className="bg-transparent w-100">名称</th>
                                    <th className="bg-transparent"> </th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr>
                                    <td className="bg-transparent">
                                        <FormBS.Control
                                            className=""
                                            type="search"
                                            placeholder=" 搜索..."
                                            aria-label="Search"
                                            data-bs-theme="light"
                                            name="searchName"
                                        />
                                    </td>
                                    <td className="bg-transparent"><Button variant="secondary" type="submit" className="w-100" >搜索</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                </div>
            </Form>
            <p id="record-count" className="m-0 p-0  me-2 text-end"></p>

            {/* Monster Result */}
            <Table className="mt-3">
                <thead>
                    <tr>
                        <th>图片</th>
                        <th>名称</th>
                        <th>等级</th>
                        <th>经验</th>
                        <th>血量</th>
                    </tr>
                </thead>
                <tbody>
                    {renderMobList(filteredMobList)}
                </tbody>
            </Table>

            {/* Pagination */}
            {updatePagination(filteredMobList)}

        </div>

    )
}

const renderMobList = (filteredMobList) => {
    const [searchParams] = useSearchParams()

    updateSearchResultCount(filteredMobList.length)

    const pageNum = Number(Object.fromEntries([...searchParams.entries()]).page) || 1
    const sliceStartIndex = (pageNum - 1) * 10
    const sliceEndIndex = sliceStartIndex + 10
    filteredMobList = filteredMobList.slice(sliceStartIndex, sliceEndIndex)
    // [ ["100100", {name: xxx, exp: xxx, maxHP: xxx}], ... ...]

    // console.log(filteredMobList)

    return filteredMobList.map(x => {
        const mobId = x[0]
        return (
            <tr key={x[0]}>
                <td>
                    <Link to={`/monster/id=${mobId}`}>
                        {renderImageWithMobId(mobId)}
                    </Link>
                </td>
                <td>
                    <Link to={`/monster/id=${mobId}`}>
                        <p dangerouslySetInnerHTML={{ __html: x[1].name }}></p>
                        {/* {x[1].name} */}
                    </Link>
                </td>
                <td>{x[1].level}</td>
                <td>{numFormatter(parseInt(x[1].exp * 3.2))}</td>
                <td>{numFormatter(x[1].maxHP)}</td>
            </tr>
        )
    })
}

export const monsterAction = async ({ request }) => {
    const data = await request.formData()

    const submission = {
        filterBy: data.get('filterBy'),
        categoryBy: data.get('categoryBy'),
        orderBy: data.get('orderBy'),
        sortBy: data.get('sortBy'),
        searchName: data.get('searchName'),
    }
    // console.log(submission)

    // send your post request . ajax
    // ....

    // redirect the user
    const actionUrl = `/monster?page=1&filter=${submission.filterBy}&category=${submission.categoryBy}&order=${submission.orderBy}&sort=${submission.sortBy}&search=${submission.searchName}`

    return redirect(actionUrl)
}

const numFormatter = num => Number(num).toLocaleString("en-US")
