import { Product } from "./types";

const products = [
    {
        id: 1,
        name: "Akoxdo Plus",
        brand: "CÔNG TY CỔ PHẦN DƯỢC QUỐC TẾ TÙNG LỘC",
        image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729740998/akoxdo-plus.png",
        description:
            "Bổ tỳ vị, tăng cường tiêu hóa, phòng ngừa còi xương, suy dinh dưỡng.",
        descriptionDetail:
            "Bổ tỳ vị, tăng cường tiêu hóa, phòng ngừa còi xương, suy dinh dưỡng.",
        category: "Thuốc bổ",
    },
    {
        id: 2,
        name: "Ambroxol-H",
        brand: "CÔNG TY CỔ PHẦN DƯỢC PHẨM TRUNG ƯƠNG 2",
        image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752439/ambroxol-h.png",
        description: "Thuốc giúp long đờm, tiêu chất nhầy đường hô hấp",
        descriptionDetail: `Thuốc giúp long đờm, tiêu chất nhầy đường hô hấp, thường dùng để điều trị ban đầu trong các trường hợp: 
- Các bệnh cấp hoặc mạn tính ở đường hô hấp có kèm tăng tiết dịch phế quản không bình thường như: Viêm phổi, viêm tai giữa, viêm xoang, viêm mũi họng, đặc biệt trong đợt cấp của viêm phế quản mạn, hen phế quản, viêm phế quản dạng hen.
 - Các bệnh nhân sau mổ hoặc cấp cứu để phòng các biến chứng ở phổi.`,
        category: "Thuốc hô hấp",
    },
    {
        id: 3,
        name: "Antikans",
        brand: "Công ty TNHH MTV 120 Armephaco",
        image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752496/antikans.webp",
        description:
            "Hỗ trợ tăng cường hệ miễn dịch đã suy giảm ở người cao tuổi",
        descriptionDetail:
            "Hỗ trợ tăng cường hệ miễn dịch đã suy giảm ở người cao tuổi",
        category: "Thuốc bổ",
    },
    {
        id: 4,
        name: "Basmetin",
        brand: "Công ty cổ phần dược phẩm Me Di Sun",
        image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752573/basmetin.webp",
        description: `Điều trị tình trạng viêm nhiễm như: Viêm khớp, dị ứng, hen suyễn.
Điều trị các tình trạng về da, thận, tim hay hệ tiêu hóa, tình trạng về mắt hoặc máu.
Điều trị những tăng trưởng bất thường trong cơ thể.`,
        descriptionDetail: `Điều trị: 
- Phản ứng quá mẫn, hen phế quản
- Viêm khớp dạng thấp, viêm khớp mạn tính thiếu niên 
- Lupus ban đỏ hệ thống, viêm da, bệnh mô liên kết (khác với bênh xơ cứng bì hệ thống), viêm nút quanh động mạch, bệnh sarcoidosis 
- Bệnh pemphigus, bệnh pemphigoid, viêm da mủ hoại thư
- Hội chứng thận hư có tổn thương tối thiểu, viêm thận kẽ cấp tính
- Bệnh thấp khớp cấp 
- Viêm loét đại tràng, bệnh Crohn 
- Viêm màng bồ đào, viêm dây thần kinh thị giác 
- Thiếu máu tan máu tự miễn, suy giảm tiểu cầu
- Bệnh bạch cầu cấp tính và bạch huyết, u lympho ác tính, đau tùy 
- Ức chế miễn dịch trong quá trình cấy ghép`,
        category: "Thuốc kháng sinh",
    },
    {
        id: 5,
        name: "Butagan",
        brand: "Anfarm hellas S.A",
        image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752606/butagan.webp",
        description:
            "Thuốc được sử dụng trong điều trị triệu chứng ho trong các trường hợp ho khan",
        descriptionDetail: `Thuốc được sử dụng trong điều trị triệu chứng ho trong các trường hợp ho khan`,
        category: "Thuốc hô hấp",
    },
    {
        id: 6,
        name: "Dopharalgic",
        brand: "CÔNG TY CỔ PHẦN DƯỢC PHẨM TRUNG ƯƠNG 2",
        image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752642/dopharalgic.webp",
        description: `Nhiễm khuẩn đường hô hấp
Nhiễm khuẩn da và cấu trúc da`,
        descriptionDetail: `Điều trị các nhiễm khuẩn ở mức độ nhẹ và vừa do các vi khuẩn nhạy cảm: 
- Nhiễm khuẩn đường hô hấp trên: 
+ Viêm họng/viêm amidan: do Streptococcus pyogenes. Trong điều trị và dự phòng nhiễm khuẩn do liên cầu, bao gồm cả dự phòng thấp tim, thuốc thường được lựa chọn là penicilin dùng đường tiêm bắp. Cefprozil nói chung có hiệu quả trong việc loại bỏ Streptococcus pyogenes từ mũi họng; tuy nhiên hiện nay chưa có đầy đủ dữ liệu để xác định hiệu quả của cefprozil trong dự phòng thấp tim. 
+ Viêm tai giữa, viêm xoang cấp: do Streptococcus pneumoniae, Haemophilus influenzae (kể cả chủng tiết ẞ- lactamase) và Moraxella catarrhalis (kể cả chủng tiết ẞ- lactamase).
 - Nhiễm khuẩn đường hô hấp dưới: Viêm phổi thứ phát cấp tính và đợt cấp của viêm phổi mạn tính (do Streptococcus pneumoniae, Haemophilus influenzae (kể cả chủng tiết ẞ- lactamase) và Moraxella catarrhalis (kể cả chủng tiết ẞ- lactamase)). 
- Nhiễm khuẩn da và cấu trúc da không biến chứng: do Staphylococcus aureus (kể cả chủng tiết penicillinase) và Streptococcus pyogenes.`,
        category: "Thuốc kháng sinh",
    },
    {
        id: 7,
        name: "Aspergillus Fumigatus ELISA Kit",
        brand: "Bordier",
        image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752677/elisa-igg-kit-test.jpg",
        description:
            "Bộ ELISA Bordier Aspergillus fumigatus được dùng để phát hiện định lượng kháng thể IgG chống lai Aspergillus fumigatus trong huyết thanh người.",
        descriptionDetail: `Bộ ELISA Bordier Aspergillus fumigatus được dùng để phát hiện định lượng kháng thể IgG chống lai Aspergillus fumigatus trong huyết thanh người. Serology là một trợ giúp chẩn đoán và không được sử dụng như là phương pháp chẩn đoán duy nhất. Xét nghiệm này cũng nhằm theo dõi những bệnh nhân có nguy cơ bị nhiễm aspergillosis.`,
        category: "Vật tư y tế",
    },
    {
        id: 8,
        name: "Fasthan 20",
        brand: "Công ty Cổ phần Dược phẩm Savi",
        image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752736/fasthan.webp",
        description: `Điều trị rối loạn lipid máu
Dự phòng biến cố tim mạch`,
        descriptionDetail: `- Điều trị rối loạn lipid máu: Điều trị tăng cholesterol máu tiên phát và rối loạn lipid máu hỗn hợp, kết hợp với điều chinh chế độ ăn, khi người bệnh không đáp ứng với chế độ điều trị không dùng thuốc (ăn kiêng, tập thể dục). 
- Dự phòng biến cố tim mạch tiên phát: Giảm tỷ lệ tử vong và tỷ lệ mắc bệnh tim mạch ở người bệnh tăng cholesterol máu vừa hoặc nặng và có nguy cơ cao xảy ra biến cố tim mạch lần đầu, kết hợp với điều chỉnh chế độ ăn. 
- Dự phòng biến cố tim mạch thứ phát: Giảm tỷ lệ tử vong do tim mạch và tỷ lệ tái phát ở người bệnh có tiền sử nhồi máu cơ tim hoặc đau thắt ngực không ổn định kèm theo tăng hay không tăng cholesterol máu. 
- Giảm lipid máu ở những người được ghép tạng đang dùng thuốc chống thải ghép.`,
        category: "Thuốc trị mỡ máu",
    },
    {
        id: 9,
        name: "Ganlotus",
        brand: "Công ty cổ phần dược phẩm CPC1 Hà Nội",
        image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752748/ganlotus.webp",
        description: `Điều trị hỗ trợ trong rối loạn khó tiêu, trong suy nhược chức năng. 
 Điều trị trong tăng amoniac máu do rối loạn chu trình urê.`,
        descriptionDetail: `Điều trị hỗ trợ trong rối loạn khó tiêu, trong suy nhược chức năng. 
- Điều trị trong tăng amoniac máu do rối loạn chu trình urê.`,
        category: "Thuốc tiêu hoá",
    },
    {
        id: 10,
        name: "Gintecin",
        brand: "SIU GUAN CHEM. IND. CO.",
        image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752757/gintecin.webp",
        description:
            "Điều trị rối loạn tuần hoàn máu não, rối loạn tuần hoàn động mạch ngoại biên",
        descriptionDetail: `Cao Ginkgo Biloba được dùng trong điều trị các rối loạn tuần hoàn máu não và ngoại biên như: 
- Rối loạn chức năng não: khó nhớ, chóng mặt, ù tai, nhức đầu và thay đổi xúc cảm kèm theo lo lắng.
- Giảm thính lực (điều trị hỗ trợ) do hội chứng cổ. 
- Rối loạn tuần hoàn động mạch ngoại biên với sự bảo tồn tuần hoàn nguyên vẹn (khập khiểng gián cách).`,
        category: "Thuốc tiêm chích",
    },
    {
        id: 11,
        name: "Hepadays",
        brand: "UNI PHARMA",
        image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752767/hepadays.jpg",
        description: `Điều trị viêm gan cấp và mãn tính, suy gan, gan nhiễm mỡ. 
Bảo vệ tế bào gan và phục hồi chức năng gan 
Phòng và điều trị hỗ trợ xơ gan, ung thư gan.`,
        descriptionDetail: `Điều trị viêm gan cấp và mãn tính, suy gan, gan nhiễm mỡ. 
- Bảo vệ tế bào gan và phục hồi chức năng gan cho những người uống rượu, bia, bị ngộ độc thực phẩm, hóa chất. 
- Những người đang sử dụng thuốc có hại tới tế bào gan như thuốc điều trị bệnh lao, ung thư, đái tháo đường, các thuốc tác động lên thần kinh, thuốc chống viêm không steroid... 
- Phòng và điều trị hỗ trợ xơ gan, ung thư gan.`,
        category: "Thuốc trị bệnh gan",
    },
    {
        id: 12,
        name: "Kidvita 7.5",
        brand: "Công ty CP Dược VTYT Hà Nam",
        image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752774/kidvita-7.5.webp",
        description:
            "Bổ sung acid amin, vitamin và khoáng chất mà cơ thể thiếu hụt do khẩu phần ăn không cung cấp đủ.",
        descriptionDetail: `- Bổ sung acid amin, vitamin và khoáng chất mà cơ thể thiếu hụt do khẩu phần ăn không cung cấp đủ.
- Hỗ trợ tăng cường sức khỏe, tăng sức đề kháng của cơ thể. 
- Đóng vai trò trong sự hình thành và phát triển chiều cao, trí tuệ của trẻ nhỏ một cách toàn diện.`,
        category: "Siro bổ",
    },
    {
        id: 13,
        name: "Kidvita 15",
        brand: "Công ty CP Dược VTYT Hà Nam",
        image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752782/kidvita-15.webp",
        description:
            "Bổ sung acid amin, vitamin và khoáng chất mà cơ thể thiếu hụt do khẩu phần ăn không cung cấp đủ.",
        descriptionDetail: `- Bổ sung acid amin, vitamin và khoáng chất mà cơ thể thiếu hụt do khẩu phần ăn không cung cấp đủ.
- Hỗ trợ tăng cường sức khỏe, tăng sức đề kháng của cơ thể. 
- Đóng vai trò trong sự hình thành và phát triển chiều cao, trí tuệ của trẻ nhỏ một cách toàn diện.`,
        category: "Siro bổ",
    },
    {
        id: 14,
        name: "Nuroact",
        brand: "Namha Pharmaceuticals",
        image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752790/nuroact.jpg",
        description:
            "Bổ sung acid amin, vitamin và khoáng chất mà cơ thể thiếu hụt do khẩu phần ăn không cung cấp đủ.",
        descriptionDetail: `- Bổ sung acid amin, vitamin và khoáng chất mà cơ thể thiếu hụt do khẩu phần ăn không cung cấp đủ.
- Hỗ trợ tăng cường sức khỏe, tăng sức đề kháng của cơ thể. 
- Đóng vai trò trong sự hình thành và phát triển chiều cao, trí tuệ của trẻ nhỏ một cách toàn diện.`,
        category: "Thuốc hướng tâm thần",
    },
    {
        id: 15,
        name: "Polcalmex",
        brand: "Polfarmex S.A",
        image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752798/polcalmex.webp",
        description: `Phòng và điều trị tình trạng thiếu calci.`,
        descriptionDetail: `Phòng và điều trị tình trạng thiếu calci.`,
        category: "Thuốc xương khớp",
    },
    {
        id: 16,
        name: "Zasemer 2g",
        brand: "Công ty cổ phần dược phẩm Am Vi",
        image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752807/zasemer.png",
        description:
            "Điều trị: nhiễm khuẩn đường hô hấp dưới, nhiễm khuẩn đường niệu, bệnh lậu không biến chứng, nhiễm khuẩn trong ổ bụng, nhiễm khuẩn xương, viêm màng não,…",
        descriptionDetail: `Điều trị các bệnh nhiễm khuẩn do các vi khuẩn nhạy cảm với ceftizoxim như: nhiễm khuẩn đường hô hấp dưới, nhiễm khuẩn đường niệu, bệnh lậu không biến chứng, viêm vùng chậu, nhiễm khuẩn huyết, nhiễm khuẩn trong ổ bụng, nhiễm khuẩn xương, khớp, nhiễm khuẩn da và cấu trúc da, viêm màng não.`,
        category: "Thuốc kháng sinh",
    },
] as Product[];

export const getProducts = async (): Promise<Product[]> => products;

export const getProductById = async (
    id: number
): Promise<Product | undefined> =>
    getProducts().then((products) =>
        products.find((product) => product.id === id)
    );
export type { Product };
