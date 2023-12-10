package Probachetyre.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probachetyre.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧРегВхГост
 */
@Entity(name = "IISProbachetyreТЧРегВхГост")
@Table(schema = "public", name = "ТЧРегВхГост")
public class TCHRegVxGost {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Gost")
    @Convert("Gost")
    @Column(name = "Гость", length = 16, unique = true, nullable = false)
    private UUID _gostid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Gost", insertable = false, updatable = false)
    private Gost gost;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Karty")
    @Convert("Karty")
    @Column(name = "Карты", length = 16, unique = true, nullable = false)
    private UUID _kartyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Karty", insertable = false, updatable = false)
    private Karty karty;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "FormaRegVxoda")
    @Convert("FormaRegVxoda")
    @Column(name = "ФормаРегВхода", length = 16, unique = true, nullable = false)
    private UUID _formaregvxodaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "FormaRegVxoda", insertable = false, updatable = false)
    private FormaRegVxoda formaregvxoda;


    public TCHRegVxGost() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}