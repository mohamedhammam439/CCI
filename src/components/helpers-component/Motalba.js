import { Button, Form, Table } from "react-bootstrap";

const Motalba = () => {
  return (
    <>
      <h5>بيان تسوية الاشتراكات السنوية حتي نهاية عام 2022</h5>
      <Table bordered className="noBorderTable">
        <thead>
          <tr>
            <th colSpan={2}>بيانات السجل التجاري</th>
            <th colSpan={2}>رأس المال المستثمر من واقع شهادة مكتب المحاسبة</th>
          </tr>
          <tr>
            <th>رأس المال المصدر بالسجل</th>
            <th> تاريخ إنتهاء السجل</th>
            <th> 2020 عام </th>
            <th>عام 2021</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Control type="text"  />
            </td>
            <td>
              <Form.Control type="text"  />
            </td>
            <td>
              <Form.Control type="text"  />
            </td>
            <td>
              <Form.Control type="text"  />
            </td>
          </tr>
        </tbody>
      </Table>
      <h5>
        بيان تسوية الفرق بين الاشتراكات المسددة و المستحقة حتي نهاية عام 2021
      </h5>
      <Table bordered className="noBorderTable">
        <thead>
          <tr>
            <th rowSpan={2}>بيان العام المالي</th>
            <th rowSpan={2}>الاشتراكات المسددة خلال السنوات التالية</th>
            <th colSpan={2} className="bg-tableColor">الاشتراكات المستحقة السداد</th>
          </tr>
          <tr>
            <th> اشتراك سنوي </th>
            <th>الرسم الاداري </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Control
                type="text"
                plaintext
                readOnly
                defaultValue="متأخرات سابقة حتي نهاية 2016-2017"
              />
            </td>
            <td>
              <Form.Control type="text" />
            </td>
            <td>
              <Form.Control type="text" />
            </td>
            <td>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Control
                type="text"
                plaintext
                readOnly
                defaultValue="اشنراك عام 2017-2018"
              />
            </td>
            <td>
              <Form.Control type="text" />
            </td>
            <td>
              <Form.Control type="text" />
            </td>
            <td>
              <Form.Control type="text"  />
            </td>
          </tr>{" "}
          <tr>
            <td>
              <Form.Control
                type="text"
                plaintext
                readOnly
                defaultValue="اشتراك عام 2018-2019"
              />
            </td>
            <td>
              <Form.Control type="text"  />
            </td>
            <td>
              <Form.Control type="text"  />
            </td>
            <td>
              <Form.Control type="text"  />
            </td>
          </tr>{" "}
          <tr>
            <td>
              <Form.Control
                type="text"
                plaintext
                readOnly
                defaultValue="اشتراك عن الفترة (6 شهور) 1-7-2019 \ 31-12-2019"
              />
            </td>
            <td>
              <Form.Control type="text"  />
            </td>
            <td>
              <Form.Control type="text"  />
            </td>
            <td>
              <Form.Control type="text"  />
            </td>
          </tr>{" "}
          <tr>
            <td>
              <Form.Control
                type="text"
                plaintext
                readOnly
                defaultValue="الاشتراك عن عام 2020"
              />
            </td>
            <td>
              <Form.Control type="text" />
            </td>
            <td>
              <Form.Control type="text" />
            </td>
            <td>
              <Form.Control type="text" />
            </td>
          </tr>{" "}
          <tr>
            <td>
              <Form.Control
                type="text"
                plaintext
                readOnly
                defaultValue="الاشتراك عن عام 2021"
              />
            </td>
            <td>
              <Form.Control type="text" />
            </td>
            <td>
              <Form.Control type="text" />
            </td>
            <td>
              <Form.Control type="text" />
            </td>
          </tr>{" "}
          <tr>
            <td>
              <Form.Control
                type="text"
                plaintext
                readOnly
                defaultValue="الاجــــــــــــمــــــــــــــالي"
              />
            </td>
            <td>
              <Form.Control type="text" />
            </td>
            <td>
              <Form.Control type="text" />
            </td>
            <td>
              <Form.Control type="text" />
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th rowSpan={2}>
              الفرق بين الاشتراكات السابق سدادها و المستحقة حتي نهاية 2021
            </th>
            <th colSpan={1} rowSpan={1} className="bg-tableColor">
              رصيد مقدم للمنشأة لصالج المنشأة{" "}
            </th>
            <th colSpan={2} rowSpan={1} className="bg-tableColor" >
              الرصيد المتأخر المستحق لصالح الغرفة{" "}
            </th>
          </tr>
          <tr>
            <td>
              <Form.Control type="text"  />
            </td>{" "}
            <td colSpan={2}>
              <Form.Control type="text" />
            </td>
          </tr>
        </thead>
      </Table>
      <Table bordered className="noBorderTable">
        <thead>
          <tr>
            <th>الاشتراك السنوي لعام 2022</th>
            <th>رصيد مقدم لصالح المنشأة</th>
            <th>رصيد متأخر لصالح الغرفة</th>
            <th className="bg-tableColor" >جملة الاشتراكات حتي نهاية 2022</th>
            <th>رصيد مقدم بعد عام 2022</th>
            <th>الضريبة المضافة 14%</th>
            <th>المستحق سداده شامل الضريبة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Control type="text"  />
            </td>
            <td>
              <Form.Control type="text"  />
            </td>
            <td>
              <Form.Control type="text"  />
            </td>
            <td className="bg-tableColor">
              <Form.Control type="text" className="bg-inputColor" />
            </td>
            <td >
              <Form.Control type="text"  />
            </td>
            <td>
              <Form.Control type="text"  />
            </td>
            <td>
              <Form.Control type="text"  />
            </td>
          </tr>
        </tbody>
      </Table>

      <Table bordered className="noBorderTable">
      <thead>
        <tr>
          <th className="bg-tableColor">حالي 2022</th>
          <th className="bg-tableColor">رصيد متأخر</th>
          <th className="bg-tableColor">رصيد مقدم</th>
          <th className="bg-tableColor">رسم قيد</th>
          <th className="bg-tableColor">إداري</th>
          <th className="bg-tableColor">شهادة</th>
          <th className="bg-tableColor">ض مضافة</th>
          <th className="bg-tableColor">جملة المسدد</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Form.Control type="text"  />
          </td>
          <td>
            <Form.Control type="text"  />
          </td>
          <td>
            <Form.Control type="text"  />
          </td>
          <td>
            <Form.Control type="text"  />
          </td>
          <td>
            <Form.Control type="text"  />
          </td>
          <td>
            <Form.Control type="text"  />
          </td>
          <td>
            <Form.Control type="text"  />
          </td>
          <td>
          <Form.Control type="text"  />
        </td>
        </tr>
      </tbody>
    </Table>
    </>
  );
};

export default Motalba;
